(function () {
  return M.block(label => M.repeat(() => M.block($continue => M(eff(1)).mbind(a => {
    if (a) return $continue();
  }).mbind(() => eff(2)).mbind(a => {
    if (a) return label();
  }).mbind(() => eff(3)).mbind(() => eff(4)).mbind(a => {
    if (!a) return label();
  })))).mbind(() => eff(5));
});