const API = 'https://yam-backend-rqly.onrender.com';

/* ── check if already logged in ── */
fetch(`${API}/api/admin/check`, { credentials: 'include' })
  .then(r => r.json())
  .then(data => {
    if (data.user) showDashboard();
  })
  .catch(() => {});

/* ── login ── */
document.getElementById('login-btn').addEventListener('click', async () => {
  const username = document.getElementById('admin-user').value.trim();
  const password = document.getElementById('admin-pass').value.trim();

  try {
    const res = await fetch(`${API}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok) {
      showDashboard();
    } else {
      document.getElementById('login-msg').textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
  } catch (err) {
    document.getElementById('login-msg').textContent = 'حدث خطأ — تأكد من تشغيل الخادم';
  }
});

/* ── logout ── */
document.getElementById('logout-btn').addEventListener('click', async () => {
  await fetch(`${API}/api/admin/logout`, { method: 'POST', credentials: 'include' });
  document.getElementById('login-section').style.display  = 'flex';
  document.getElementById('dashboard-section').style.display = 'none';
});

/* ── show dashboard ── */
function showDashboard() {
  document.getElementById('login-section').style.display    = 'none';
  document.getElementById('dashboard-section').style.display = 'block';
  loadSuggestions();
}

/* ── load suggestions ── */
async function loadSuggestions() {
  const container = document.getElementById('suggestions-container');
  const noMsg     = document.getElementById('no-suggestions');
  container.innerHTML = '';

  try {
    const res  = await fetch(`${API}/api/suggestions`, { credentials: 'include' });
    const data = await res.json();

    if (data.length === 0) {
      noMsg.style.display = 'block';
      return;
    }

    noMsg.style.display = 'none';
    data.forEach(s => {
      const card = document.createElement('div');
      card.className = 'suggestion-card';
      card.innerHTML = `
        <div class="suggestion-info">
          <h3>${s.name}</h3>
          <p>الفرع الأب: ${s.parentId?.name || '—'}</p>
          <p>مقدم من: ${s.submittedBy}</p>
          <p>ملاحظات: ${s.notes || '—'}</p>
          <p>التاريخ: ${new Date(s.createdAt).toLocaleDateString('ar-SA')}</p>
        </div>
        <div class="suggestion-actions">
          <button class="btn-approve">قبول</button>
          <button class="btn-reject">رفض</button>
        </div>
      `;

      function addTouchHandler(btn, handler) {
        let tapped = false;
        btn.addEventListener('touchend', (e) => {
          e.preventDefault();
          if (tapped) return;
          tapped = true;
          handler();
        });
        btn.addEventListener('click', () => {
          if (tapped) { tapped = false; return; }
          handler();
        });
      }

      addTouchHandler(card.querySelector('.btn-approve'), () => approve(s._id));
      addTouchHandler(card.querySelector('.btn-reject'),  () => reject(s._id));

      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = '<p style="text-align:center;color:#e53935">حدث خطأ في تحميل الاقتراحات</p>';
  }
}

/* ── approve ── */
async function approve(id) {
  const res = await fetch(`${API}/api/admin/approve/${id}`, {
    method: 'POST',
    credentials: 'include'
  });
  if (!res.ok) {
    alert('فشل القبول — ' + res.status);
    return;
  }
  loadSuggestions();
}

/* ── reject ── */
async function reject(id) {
  const res = await fetch(`${API}/api/admin/reject/${id}`, {
    method: 'POST',
    credentials: 'include'
  });
  if (!res.ok) {
    alert('فشل الرفض — ' + res.status);
    return;
  }
  loadSuggestions();
}