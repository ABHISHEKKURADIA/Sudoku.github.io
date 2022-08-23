


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
                col.push(arr[i][j]);
                console.log(col);
            }
        }
    }
    return false;
}