function fiba()
{
    let sum=0,i,n1=0,n2=1;
    let limit=prompt("enter limit");
    console.log(n1);
    console.log(n2);
    for(i=1;i<=limit;i++)
    {
      sum=n1+n2;
      n1=n2;
      n2=sum;
      console.log(sum);
    }
}
fiba();