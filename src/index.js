module.exports = function solveEquation(equation) {
  var arr = equation.split(' '),
      o = [];
    a = parseInt(arr[0]);
    b = parseInt(arr[3] + arr[4]);
    c = parseInt(arr[7] + arr[8]);

    desk = b*b - 4*a*c;

    if (desk > 0){
      x1 = (((-b) + Math.sqrt(desk))/(2 * a));
      x2 = (((-b) - Math.sqrt(desk))/(2 * a));
    } else if(desk = 0){
      x1 = -(b/(2*a));
      x2 = x1;
    }
    x1 = Math.round(x1);
    o.push(x1);
    x2 = Math.round(x2);
    o.push(x2);

    function Numeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    };
    o.sort(Numeric);
    return o;
}
