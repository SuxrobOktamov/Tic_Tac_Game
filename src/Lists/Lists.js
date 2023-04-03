import React, { useRef }   from "react";
import './Lists.css';

let newArr = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5]
];

function Lists() {
    function MouseOver(item) {
        if(item.target.classList.contains('one') && !item.target.classList.contains('solid') && !item.target.classList.contains('delete')){
            item.target.classList.add('delete-btn');
        }else if(!item.target.classList.contains('solid') && !item.target.classList.contains('delete')){
            item.target.classList.add('solid-btn');
        } 
    }

    function MouseOut(item) {
        item.target.classList.remove('solid-btn');
        item.target.classList.remove('delete-btn');    
    }

    const ListGroup = useRef();
    
   
    function Cliked(item) {
        const arrListItem = Array.from(ListGroup.current.children);
        
        if(item.target.classList.contains('one') && !item.target.classList.contains('solid') && !item.target.classList.contains('delete')){
            item.target.classList.add('delete');
            arrListItem.forEach((el)=>{
                el.classList.remove('one');
            })
            draw();
            winPlayerOne()
            
        }else if(!item.target.classList.contains('solid') && !item.target.classList.contains('delete')){
            item.target.classList.add('solid');
            arrListItem.forEach((el)=>{
                el.classList.add('one');
            })
            draw();
            winPlayerTwo()
        }
    }

    function winPlayerOne() {
        const arrListItem = Array.from(ListGroup.current.children);
        newArr.forEach((item)=>{
            if(arrListItem[item[0]].classList.contains('delete') && arrListItem[item[1]].classList.contains('delete') && arrListItem[item[2]].classList.contains('delete')){
                arrListItem.forEach((el)=>{
                    el.classList.remove('delete');
                    el.classList.remove('solid');
                })
                arrListItem[item[0]].classList.add('win', 'delete'); 
                arrListItem[item[1]].classList.add('win', 'delete') ;
                arrListItem[item[2]].classList.add('win', 'delete') ;
                ListGroup.current.parentNode.parentNode.children[2].classList.add('gameWin');
                ListGroup.current.parentNode.parentNode.children[3].classList.remove('gameWin');
                ListGroup.current.parentNode.parentNode.children[4].classList.remove('gameWin');
            }
        })
    }

    function winPlayerTwo() {
        const arrListItem = Array.from(ListGroup.current.children);
        newArr.forEach((item)=>{
            if(arrListItem[item[0]].classList.contains('solid') && arrListItem[item[1]].classList.contains('solid') && arrListItem[item[2]].classList.contains('solid')){
                arrListItem.forEach((el)=>{
                    el.classList.remove('delete');
                    el.classList.remove('solid');
                })
                arrListItem[item[0]].classList.add('win', 'solid'); 
                arrListItem[item[1]].classList.add('win', 'solid') ;
                arrListItem[item[2]].classList.add('win', 'solid') ;

                ListGroup.current.parentNode.parentNode.children[3].classList.add('gameWin');
                ListGroup.current.parentNode.parentNode.children[2].classList.remove('gameWin');
                ListGroup.current.parentNode.parentNode.children[4].classList.remove('gameWin');
            }
        })
    }

    function draw() {
        const arrListItem = Array.from(ListGroup.current.children);

        let one = arrListItem.filter(e=> e.classList.contains('delete'));
        let two = arrListItem.filter(e=> e.classList.contains('solid'));

        if( one.length + two.length === 9){
            ListGroup.current.parentNode.parentNode.children[4].classList.add('gameWin');
            ListGroup.current.parentNode.parentNode.children[2].classList.remove('gameWin');
            ListGroup.current.parentNode.parentNode.children[3].classList.remove('gameWin');
        }
        
    }

    return(
        <div className="row ">
            <ul ref={ListGroup}  className="list-item">
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
                <li onMouseOver={(e)=>{MouseOver(e)}} onMouseOut={(e)=>{MouseOut(e)}} onClick={(e)=>{Cliked(e)}} className="item one"></li>
            </ul>
        </div>
    )

}

export default Lists;