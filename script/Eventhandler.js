


function validate(e)
{
    
    let element=e;
    
    if(element.innerText.length>0)
    {
        element.innerText='';
        return false;
    }
    return false;
}



function confirmEnd()
{
    var arr=[];
    let td=document.getElementsByTagName("td");
    
    for(let j=0;j<=80;j++)
    {
        
    let temp=[];
    for(let i=j;i<=j+8;i++)
    {

        if(i>80)
        {
            temp=[];
            return isEnd(arr);
        }

        if(td[i].textContent==='' || td[i].textContent==undefined)
        {
            temp.push(0);
        }
        else
        {
            if(typeof(td[i].textContent)!=String)
            {
            temp.push(Number(td[i].textContent));
            }
            else
            {
            temp.push(Number(1));
            }

        }

        if((i+1)%9==0)
        {
            j=i;
            i=j++;
            arr.push(temp);
            // console.log(arr);
            temp=[];
        }

    }
    }
    
    return isEnd(arr);
}


function isEnd(arr)
{
    var pattern=new RegExp(/^[1-9]$/);
    console.log(arr);
    let row=[];
    let col=[];
    for(let i=0;i<=8;i++)
    {
        col=[];
        for(let j=0;j<=8;j++)
        {
            if(!pattern.test(arr[i][j]) || col.includes(arr[i][j]))
            {
                console.log("Not over Yet");
                return false;
            }
            else
            {
                col.push(Number(arr[i][j]));
                console.log(arr[i][j]);
                console.log("you won");
               
            }
        }
    }
    body.innerHTML="wow you made it!! Will create new levels soon";
    alert("Nice");
    return false;
}

var sample1=[
[0,0,0,2,6,0,7,0,1],
[6,8,0,0,7,0,0,9,0],
[1,9,0,0,0,4,5,0,0],
[8,2,0,1,0,0,0,4,7],
[0,0,4,6,0,2,9,0,0],
[0,5,0,0,0,3,0,2,8],
[0,0,9,3,0,0,0,7,4],
[0,4,0,0,5,0,0,3,6],
[7,0,3,0,1,8,0,0,0]];

function sample()
{
    let td=document.getElementsByTagName("td");
    let count=0;
    for(let i=0;i<=8;i++)
    {
        for(let j=0;j<=8;j++)
        {
            count++;
            if(sample1[i][j]==0)
            {
                continue;
            }
            else
            {
                console.log(count);
                td[count-1].innerText=sample1[i][j];
                td[count-1].setAttribute("contenteditable","false");
            }
        }
    }
    return false;
}

sample();