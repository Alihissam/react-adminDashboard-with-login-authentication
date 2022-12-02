import React from 'react'
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singlecontainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editbutton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                                alt="" className='itemImg' />
                            <div className="details">
                                <h1 className="itemTitle">Hissam Ali</h1>
                                <br />
                                <div className="detailitem">
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'> Hissam@gmail.com</span>
                                </div>
                                <br />
                                <div className="detailitem">
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'> + 0 50 267 4170</span>
                                </div>
                                <br />
                                <div className="detailitem">
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'> United Arab Emirates</span>
                                </div>
                                <br />
                                <div className="detailitem">
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'> Pakistan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Pending Transaction" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className='title'>Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single
