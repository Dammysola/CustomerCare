import React from 'react'
import Style from '../listView/List_viewTable.module.css'
import Button from '../button/Button'


const List_viewTable = (props) => {

    const {listView_arr} = props

    return (
        <div>
            <div id={Style.All_FootSoldiers_tableDiv}>
                <table>
                    <thead>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Countries</th>
                            <th>Flag</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            listView_arr.map((obj, index) => {

                                return (

                                    <tr>
                                        <td className={Style.number}>{index + 1}</td>
                                        <td > <div className={Style.person_name_td}><img src={obj.name.img} alt="" /> {obj.name.name}</div></td>
                                        <td>{obj.countries}</td>
                                        <td><img src={obj.flag} alt="" /></td>
                                        <td>
                                            <Button
                                                text={obj.action} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default List_viewTable