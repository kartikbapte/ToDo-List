import React, {useState} from 'react';
import "../App.css";



const Todo= () => {
    const [inputData, setInputData] = useState('');
    const [items , setItems] = useState([]);

    const addItem = () =>{
        if (!inputData){

        }
        else{
            setItems([...items,inputData]);
            setInputData('')
        }
        // setItems([...items,inputData]);
        // setInputData('');
    }
        const deleteItem =(id)=>{
            console.log(id);
            const updateitems = items.filter((elem, ind ) =>{
                return ind != id;
            } );
            setItems(updateitems);
        }
     const removeAll = () =>{
        setItems([]);
     }
     
     
    return(
        <>
        <div className='main-div'>
            <div className='child-div'>
                <figure> 
                    {/* <img src={todo} alt='todo'/> */}
                    <h1>Add Your List Here</h1>
                </figure>
                    <div className='grid-container'>
                        <input type="text" placeholder='Add Items...' value = {inputData} onChange={(e) =>setInputData(e.target.value)}/>
                        <i className='fa fa-plus add-btn' title='Add item' onClick={addItem}></i>
                    
                    </div>
                    {/* <button  type="submit" value="Submit" onClick={addItem}>Additem</button> */}

                    <div className='showItems'>
                        {
                            items.map((elem, ind) =>
                            {
                                     return(
                                    <div className='eachItem' key={ind}>
                                        <h3>{elem}</h3>
                                        <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() =>deleteItem(ind)}></i>


                                    </div>
                                ) 
                            })
                        }

                    </div>

                    
                    
                    
                    
                    
                    
            </div>
        </div>
        </>
    );

                    }
export default Todo;
