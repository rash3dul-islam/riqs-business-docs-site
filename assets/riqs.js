// "Back to app" link in the header, like the KLAX docs.
document$.subscribe(function () {
  var inner = document.querySelector(".md-header__inner");
  if (!inner || inner.querySelector(".k-back")) return;
  var a = document.createElement("a");
  a.className = "k-back";
  a.href = "https://riqs.seliselocal.com/login";
  a.innerHTML = "Back to app <span aria-hidden=\"true\">&rarr;</span>";
  inner.appendChild(a);
});
