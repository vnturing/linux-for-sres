/* Linux for Aspiring Platform Engineers and SREs: shared course behaviour */
(function () {
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // USE annunciator panel: <div class="use-panel" data-lit="cpu.u cpu.s mem.e"> (or "all")
  document.querySelectorAll('.use-panel').forEach(function (p) {
    var lit = (p.dataset.lit || '').split(/\s+/).filter(Boolean);
    var res = [['cpu', 'CPU'], ['mem', 'Memory'], ['disk', 'Disk'], ['net', 'Network']];
    var kinds = [['u', 'utilization'], ['s', 'saturation'], ['e', 'errors']];
    var i = 0;
    p.innerHTML = res.map(function (r) {
      return '<div class="res"><span class="rn">' + r[1] + '</span><span class="lamps">' +
        kinds.map(function (k) {
          var on = lit.indexOf('all') > -1 || lit.indexOf(r[0] + '.' + k[0]) > -1;
          return '<span class="lamp ' + k[0] + (on ? ' on' : '') + '" style="--i:' + (i++) +
            '" title="' + r[1] + ' ' + k[1] + (on ? ' (in focus)' : '') + '">' + k[0].toUpperCase() + '</span>';
        }).join('') + '</span></div>';
    }).join('');
    p.setAttribute('role', 'img');
    p.setAttribute('aria-label', 'USE focus: ' + (lit.join(', ') || 'none'));
    if (p.dataset.boot) p.classList.add('boot');
  });

  // terminal blocks: dim the prompt so copy and paste grabs only the command
  document.querySelectorAll('pre.term code').forEach(function (c) {
    c.innerHTML = c.innerHTML.split('\n').map(function (l) {
      if (l.indexOf('$ ') === 0) return '<span class="ps">$ </span>' + l.slice(2);
      if (l.charAt(0) === '#') return '<span class="cm">' + l + '</span>';
      return l;
    }).join('\n');
  });

  // quizzes: one attempt, immediate feedback, explanation after answering
  var lesson = document.body.dataset.lesson;
  function finished() {
    if (!lesson) return;
    var qs = document.querySelectorAll('.quiz');
    for (var i = 0; i < qs.length; i++) if (!qs[i].dataset.done) return;
    store.set('lsre:done:' + lesson, '1');
  }
  document.querySelectorAll('.quiz').forEach(function (q) {
    var why = q.querySelector('.why');
    var items = Array.prototype.slice.call(q.querySelectorAll('.opts li'));
    items.forEach(function (li) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = li.textContent;
      b.dataset.ok = li.hasAttribute('data-ok') ? '1' : '';
      li.textContent = '';
      li.appendChild(b);
      b.addEventListener('click', function () {
        if (q.dataset.done) return;
        q.dataset.done = '1';
        items.forEach(function (x) { if (x.firstChild.dataset.ok) x.firstChild.classList.add('ok'); });
        if (!b.dataset.ok) b.classList.add('bad');
        why.hidden = false;
        store.set('lsre:q:' + q.dataset.id, b.dataset.ok ? '1' : '0');
        finished();
      });
    });
  });

  // course map: mark finished lessons
  document.querySelectorAll('[data-lesson-link]').forEach(function (a) {
    if (store.get('lsre:done:' + a.dataset.lessonLink)) a.closest('li').classList.add('done');
  });

  // Mermaid diagrams, themed from the page's own colour tokens
  if (window.mermaid) {
    var cs = getComputedStyle(document.documentElement);
    var v = function (n) { return cs.getPropertyValue(n).trim(); };
    window.mermaid.initialize({
      startOnLoad: true, theme: 'base', securityLevel: 'strict',
      themeVariables: {
        fontFamily: 'Atkinson Hyperlegible, system-ui, sans-serif',
        primaryColor: v('--tint'), primaryTextColor: v('--ink'), primaryBorderColor: v('--soft'),
        lineColor: v('--soft'), secondaryColor: v('--paper'), tertiaryColor: v('--paper'),
        background: v('--paper'), noteBkgColor: v('--tint'), noteTextColor: v('--ink')
      }
    });
  }
})();
