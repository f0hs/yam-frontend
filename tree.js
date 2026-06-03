/*const treeData = {
  name: "يام",
  expandable: true,
  children: [
    { name: "جشم", expandable: true, children: [

      {name: "بني سلمان", expandable:true, children:[
        {name: "ال مرة", expandable:false},
        {name:"ال هتيلة" , expandable:false},
        {name:"ال سدران" , expandable:false},
        {name: "ال مستنير", expandable:false},
        {name: "ال سوار", expandable:false},
        {name:"ال مشرف" , expandable:false},
        {name: "بني علي", expandable:false},
        
      ]},
      {name: "ال هندي", expandable:false},
      {name:"الصقور" , expandable:false}
    ] },
    {
      name: "مذكر",
      expandable: true,
      children: [
        {name: "مواجد", expandable: true, children:[
        {name:"لسلوم", expandable: false, children:[]},
        {name:"ال حسن" , expandable:false},
        {name:"ال حارث", expandable:false},
        {name: "ال بحري", expandable:false}]},
        {
          name: "هشام",
          expandable: true,
          children: [
            { name: "(عحيم) علي", expandable: true, children:[
              { name:"ال وبير" , expandable: false},
              {name: "ال مرزوق", expandable: true, children:[
                {name: "ال مسعود" , expandable: true, children:[
                  {name:"ال شامر" , expandable: false},
                  {name:"ال مصرا" , expandable: false},
                  {name: "ال ضاعن", expandable: false}
                ]},
                {name:"ال حدجة" , expandable : true, children:[
                  {name: "ال صليبي" , expandable:true, children:[
                    {name: "ال خويطر", expandable:false},
                    {name:"ال محفوظ" , expandable: false}
                  ]},
                  {name: "ال نشوان", expandable:true, children:[
                    {name:"ال هتلان" , expandable:false},
                    {name:"ال مساوا" , expandable: true, children:[
                      {name:"ال سليمان" , expandable: false}, 
                      {name:"ال علي" , expandable: true, children:[
                        {name:"ال حبيش" , expandable: false},
                        {name:"ال معيض" , expandable: true, children:[
                          {name: "ال هادي", expandable:false},
                          {name:"ال لزيز" , expandable:false},
                          {name:"ال راشد" , expandable:true, children:[
                            {name: "ال ناجعة",id:"msn", expandable:false},
                            {name: "ال سفران", expandable:false}
                          ]},
                          {name:"ال صالح" , expandable:false},
                          {name: "ال سلبة", expandable:false},
                          {name: "ال ريمة", expandable:false},
                        ]}
                      ]}
                    ]}
                  ]}
                ]},
              ]}
            ]},
            {name: "غصن", expandable: false },
            {
              name: "وعيل",
              expandable: true,
              children: [
                {
                  name: "ال حمد بن فاضل",
                  expandable: true,
                  children: [ { name: "ال فهاد", expandable: false },
                    {name:"ال عمر" , expandable:false},
                    {name:"ال دغيش" , expandable:false},

                  ]
                },
                {
                  name: "سليمان",
                  expandable: true,
                  children: [
                    {
                      name: "عيسى (الهرش)",
                      expandable: true,
                      children: [
                        {name:"حسن", expandable:true, children:[
                          {name:"ال فروان" , expandable:false},
                          {name: "ال سالم", expandable:false},
                          {name: "ال لبيد", expandable:false},
                          {name:"ال عوض" , expandable: false}
                        ]},
                        {
                          name: "درهم",
                          expandable: true,
                          children: [
                            { name: "ال سفران", expandable: true, children: [
                              { name: "ال شبيب", expandable: false },
                              { name: "ال حبيط", expandable: false },
                              { name: "ال شاتر", expandable: false }
                            ]},
                            {
                              name: "ال رشيد",
                              expandable: true,
                              children: [
                                { name: "مرجع", expandable: true, children: [
                                    { name: "ال شعفه", expandable: false },
                                    { name: "ال زايد", expandable: true, children: [
                                      { id: "al-Nurah", name: "ال نورة", expandable: false },
                                      { name: "ال نهاية", expandable: false },
                                      { name: "ال قاشوط", expandable: false },
                                      { name: "ال جحران", expandable: false },
                                      { name: "ال حمران", expandable: false }
                                    ]}
                                ]},
                                { name: "مطلق", expandable: true, children: [
                                  { name: "علي", expandable: true, children: [
                                    { name: "ال قينان", expandable: true }
                                  ]}
                                ]},
                                { name: "علي (جد ال راضية)", expandable: true, children: [
                                  { name:"ال معيض" , expandable: false},
                                  { name:"ال حمد" , expandable: false},
                                  { name: "ال حمير", expandable: false },
                            
                                ]}
                              ]
                            },
                            {
                              name: "ال مطلق",
                              expandable: true,
                              children: [
                                { name: "ال مخلص",          expandable: false },
                                { name: "ال معجبه",         expandable: false },
                                { name: "ال راكه",          expandable: false },
                                { name: "ال عاطف بن سلطان", expandable: false }
                              ]
                            },
                            {
                              name: "ال فطيح",
                              expandable: true,
                              children: [
                                {
                                  name: "ال دبيش",
                                  expandable: true,
                                  children: [
                                    { name: "ال مهدي بن حويل", expandable: false },
                                    { name: "ال علي بن راعية", expandable: false }
                                  ]
                                },
                                {
                                  name: "ال عازب",
                                  expandable: true,
                                  children: [
                                    { name: "ال محسن", expandable: false },
                                    { name: "ال صالح", expandable: false },
                                    { name: "ال علي",  expandable: false }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { name: " (محمد)ال عرجا", expandable: true, children: [
                      { name: "ال صلاح", expandable: true, children: [
                        { name: "ال مهشل",  expandable: false },
                        { name: "ال مرعبة", expandable: false }
                      ]},
                      { name: "ال قنيبر", expandable: true, children: [
                        { name: "ال مريع", expandable: false },
                        { name: "ال خفاق", expandable: false }
                      ]}
                    ]}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};*/

/* ── global root ── */
let root;

/* ── constants ── */
const NW  = 150;
const NH  = 60;
const NRX = 6;
const HG  = 30;
const VG  = 80;
const PAD = 120;

/* ── D3 setup ── */
const svg   = d3.select('#tree-container').append('svg').style('overflow','visible').style('width','100%').style('height','100%');
const gMain  = svg.append('g').attr('class','main-group');
const gLinks = gMain.append('g').attr('class','links');
const gNodes = gMain.append('g').attr('class','nodes');

/* ── zoom & pan state ── */
let scale = 1;
let x     = 0;
let y     = 0;

function applyTransform() {
  const svgW = +svg.attr('width')  || window.innerWidth;
  const svgH = +svg.attr('height') || window.innerHeight;
  x = Math.min(x,  svgW * 5);
  x = Math.max(x, -svgW * 5);
  y = Math.min(y,  svgH * 5);
  y = Math.max(y, -svgH * 0.5);
  gMain.attr('transform', `translate(${x}, ${y}) scale(${scale})`);
}

/* mouse wheel → zoom */
svg.node().addEventListener('wheel', (e) => {
  e.preventDefault();
  scale *= e.deltaY < 0 ? 1.1 : 0.9;
  scale = Math.min(Math.max(scale, 0.3), 3);
  applyTransform();
}, { passive: false });

/* click and drag → pan */
let dragging = false;
let startX, startY;

svg.node().addEventListener('mousedown', (e) => {
  dragging = true;
  startX = e.clientX - x;
  startY = e.clientY - y;
  svg.node().style.cursor = 'grabbing';
});
svg.node().addEventListener('mousemove', (e) => {
  if (!dragging) return;
  x = e.clientX - startX;
  y = e.clientY - startY;
  applyTransform();
});
svg.node().addEventListener('mouseup',    () => { dragging = false; svg.node().style.cursor = 'grab'; });
svg.node().addEventListener('mouseleave', () => { dragging = false; });
svg.node().style.cursor = 'grab';

/* ── touch support ── */
let lastTouchX, lastTouchY, lastPinchDist = null;

svg.node().addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    lastTouchX = e.touches[0].clientX;
    lastTouchY = e.touches[0].clientY;
  } else if (e.touches.length === 2) {
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    lastPinchDist = Math.sqrt(dx * dx + dy * dy);
  }
}, { passive: true });

svg.node().addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (e.touches.length === 2) {
    const dx   = e.touches[0].clientX - e.touches[1].clientX;
    const dy   = e.touches[0].clientY - e.touches[1].clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (lastPinchDist) {
      scale *= dist / lastPinchDist;
      scale = Math.min(Math.max(scale, 0.3), 3);
      applyTransform();
    }
    lastPinchDist = dist;
  } else if (e.touches.length === 1) {
    const touch = e.touches[0];
    x += touch.clientX - lastTouchX;
    y += touch.clientY - lastTouchY;
    lastTouchX = touch.clientX;
    lastTouchY = touch.clientY;
    applyTransform();
  }
}, { passive: false });

svg.node().addEventListener('touchend', () => {
  lastTouchX = null;
  lastTouchY = null;
  lastPinchDist = null;
});

/* ── zoom buttons ── */
document.getElementById('zoom-in').addEventListener('click', () => {
  scale = Math.min(scale * 1.3, 3);
  applyTransform();
});
document.getElementById('zoom-out').addEventListener('click', () => {
  scale = Math.max(scale / 1.3, 0.3);
  applyTransform();
});
document.getElementById('zoom-reset').addEventListener('click', () => {
  scale = 1;
  x = window.innerWidth / 2;
  y = 120;
  applyTransform();
});

/* ── tree layout ── */
const treeLayout = d3.tree().nodeSize([NW + HG, VG]);

/* ── elbow paths ── */
function elbow(d) {
  const sx = d.source.x, sy = d.source.y + NH;
  const tx = d.target.x, ty = d.target.y;
  const my = (sy + ty) / 2;
  return `M${sx},${sy} L${sx},${my} L${tx},${my} L${tx},${ty}`;
}
function elbowCollapsed(src) {
  const sx = src.x, sy = src.y + NH;
  return `M${sx},${sy} L${sx},${sy} L${sx},${sy} L${sx},${sy}`;
}

/* ── node class helper ── */
function nodeClass(d) {
  let cls = 'node';
  if (d.data.expandable) cls += ' has-branches';
  if (d.data.active)     cls += ' is-active';
  if (d.data.id)         cls += ` node--${d.data.id}`;
  return cls;
}

/* ── main update function ── */
function update(source) {
  treeLayout(root);

  const nodes = root.descendants();
  const links = root.links();

  let minX = Infinity, maxX = -Infinity, maxY = 0;
  nodes.forEach(d => {
    if (d.x - NW/2 < minX) minX = d.x - NW/2;
    if (d.x + NW/2 > maxX) maxX = d.x + NW/2;
    if (d.y + NH   > maxY) maxY = d.y + NH;
  });

  const svgW = Math.max(maxX - minX + PAD * 2, window.innerWidth);
  const svgH = maxY + PAD * 2;
  const dur  = 380;

  svg.transition().duration(dur).attr('width', svgW).attr('height', svgH);

  if (source === root) {
    x = svgW / 2;
    y = 120;
    applyTransform();
  }

  /* links */
  const link = gLinks.selectAll('path.link').data(links, d => d.target.data._id);

  link.enter().insert('path', ':first-child')
    .attr('class', 'link')
    .attr('d', () => elbowCollapsed(source))
    .merge(link)
    .transition().duration(dur)
    .attr('d', elbow);

  link.exit().transition().duration(dur).attr('d', () => elbowCollapsed(source)).remove();

  /* nodes */
  const node = gNodes.selectAll('g.node').data(nodes, d => d.data._id);

  const enter = node.enter().append('g')
    .attr('class', nodeClass)
    .attr('transform', () => `translate(${source.x0 ?? source.x},${source.y0 ?? source.y})`)
    .on('click', (event, d) => {
      event.stopPropagation();
      if (!d.data.expandable) return;
      if (d.children) {
        d._children = d.children;
        d.children  = null;
      } else if (d._children) {
        d.children  = d._children;
        d._children = null;
      }
      d.x0 = d.x; d.y0 = d.y;
      update(d);
    })
    .on('mouseover', (event, d) => {
      const bg = document.getElementById('name-bg');
      if (bg) { bg.textContent = d.data.name; bg.style.opacity = '1'; }
    })
    .on('mouseout', () => {
      const bg = document.getElementById('name-bg');
      if (bg) bg.style.opacity = '0';
    });

  enter.append('rect').attr('x', -NW/2).attr('y', 0).attr('width', NW).attr('height', NH).attr('rx', NRX).attr('ry', NRX);
  enter.append('text').attr('class', 'label').attr('x', 0).attr('y', NH / 2);
  enter.append('text').attr('class', 'indicator').attr('x', NW/2 - 12).attr('y', NH / 2);

  const all = node.merge(enter);

  all.transition().duration(dur).attr('transform', d => `translate(${d.x},${d.y})`);
  all.attr('class', nodeClass);
  all.select('text.label').text(d => d.data.name);
  all.select('text.indicator').text(d => {
    if (!d.data.expandable) return '';
    return d.children ? '−' : '+';
  });

  node.exit().transition().duration(dur)
    .attr('transform', `translate(${source.x},${source.y})`)
    .style('opacity', 0).remove();

  nodes.forEach(d => { d.x0 = d.x; d.y0 = d.y; });
}

/* ── search ── */
function expandPath(node) {
  let current = node.parent;
  while (current) {
    if (current._children) {
      current.children  = current._children;
      current._children = null;
    }
    current = current.parent;
  }
}

function searchTree(name) {
  const matches = [];
  function visit(node) {
    if (node.data.name.includes(name)) matches.push(node);
    if (node.children)  node.children.forEach(visit);
    if (node._children) node._children.forEach(visit);
  }
  visit(root);
  root.each(d => d.data.active = false);
  matches.forEach(match => { expandPath(match); match.data.active = true; });
  update(root);
  return matches;
}

document.getElementById('search-btn').addEventListener('click', () => {
  const input = document.getElementById('search-input').value.trim();
  if (!input) return;
  const results = searchTree(input);
  if (results.length === 0) alert('لم يتم العثور على نتيجة');
});

/* ── build tree from flat API response ── */
function buildTree(nodes) {
  const map = {};
  nodes.forEach(n => {
    map[n._id] = { name: n.name, expandable: n.expandable, _id: n._id, id: n.cssId || undefined, children: [] };
  });
  let rootNode = null;
  nodes.forEach(n => {
    if (n.parentId) {
      if (map[n.parentId]) map[n.parentId].children.push(map[n._id]);
    } else {
      rootNode = map[n._id];
    }
  });
  return rootNode;
}

/* ── fetch tree from backend ── */
const API_BASE = (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3000'
  : 'https://yam-backend-rqly.onrender.com';

fetch(`${API_BASE}/api/tree`)
  .then(r => r.json())
  .then(nodes => {
    const treeData = buildTree(nodes);

    root = d3.hierarchy(treeData);
    root.x0 = 0;
    root.y0 = 0;

    root.descendants().slice(1).forEach(d => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      }
    });

    update(root);
  })
  .catch(err => console.error('Failed to load tree:', err));


  /* ── populate parent dropdown ── */
fetch(`${API_BASE}/api/tree`)
  .then(r => r.json())
  .then(nodes => {
    const select = document.getElementById('suggest-parent');
    nodes.forEach(node => {
      const option = document.createElement('option');
      option.value = node._id;
      option.textContent = node.name;
      select.appendChild(option);
    });
  });

/* ── suggest bottom-sheet toggle (mobile) ── */
document.getElementById('suggest-toggle').addEventListener('click', () => {
  document.querySelector('.suggest-section').classList.toggle('is-open');
});

/* ── submit suggestion ── */
document.getElementById('suggest-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name       = document.getElementById('suggest-name').value.trim();
  const parentId   = document.getElementById('suggest-parent').value;
  const submittedBy = document.getElementById('suggest-by').value.trim();
  const notes      = document.getElementById('suggest-notes').value.trim();

  if (!name || !parentId || !submittedBy) {
    document.getElementById('suggest-msg').textContent = 'يرجى ملء جميع الحقول المطلوبة';
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/suggest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, parentId, submittedBy, notes })
    });

    const data = await res.json();
    document.getElementById('suggest-msg').textContent = 'تم إرسال الاقتراح بنجاح — سيتم مراجعته قريباً';
    document.getElementById('suggest-form').reset();
  } catch (err) {
    document.getElementById('suggest-msg').textContent = 'حدث خطأ — يرجى المحاولة مرة أخرى';
  }
});