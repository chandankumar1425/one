// 3 2 1
// 3 2 1
// 3 2 1
//  pattern like this

var num = 3;

for(var i=num; i>=1; i--)
{
  var bag = "";
  for(var j=num; j>=1; j--)
  {
    bag= bag + j +" ";
  }
  console.log(bag);
}