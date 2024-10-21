import React, { useState } from 'react'
import Style from './CC_Profile.module.css'
import profile_img from '../../assets/images/ccImg.png'
import edit from '../../assets/svg/edit.svg'
import white_edit from '../../assets/svg/white_edit.svg'
import capture_two from '../../assets/svg/capture_two.svg'
import Input from '../../components/SignUp_input/Input'
import Button from '../../components/button/Button'



const Profile = () => {

    const [editState, setEditState] = useState(false)
    const [imgUrl, SetImgUrl] = useState("")

    const handleFile = (e)=>{
            const file = e.target.files[0]
            // convert the file to a string and assign
            // and append the name of the file you are working with to a URL
            const url = URL.createObjectURL(file)
            SetImgUrl(url)
        }


    const [profileUpdate, setProfileUpdate] = useState({

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        // imgURL: ""
    })

    const editFun = () => {
        setEditState(!editState)
    }

    const HandleChange = (e) => {
        const { value, name, files } = e.target

        setProfileUpdate((prev) => ({
            ...prev,
            [name]: name === "imgURL" ? URL.createObjectURL(files[0]) : value
        }))
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(profileUpdate);
    }


    return (
        <div id={Style.Profile_mainDiv}>
            <div id={Style.Profile_wrapperDiv}>
                <div id={Style.profile_detailsDiv}>

                    <div id={Style.Profile_firstline}>
                        <img src={profile_img} alt="" />

                        <p id={Style.nameText}>John Doe</p>
                        <p id={Style.positionText}>Customer Care</p>
                        <p id={Style.status}><div id={Style.statusDiv}></div> Online</p>
                    </div>

                    <div className={Style.log_InfoDiv}>

                        <p className={Style.loggedText}>Date of Creation</p>
                        <p className={Style.dateText}>24- Oct-2024</p>
                    </div>

                    <div className={Style.log_InfoDiv}>
                        <p className={Style.loggedText}>Last Login</p>
                        <p className={Style.dateText}>24- Oct-2024</p>
                    </div>

                    <div id={Style.lastlineDiv}>
                        <p className={Style.loggedText}>Status</p>
                        <p id={Style.activeText}>Active</p>
                    </div>
                </div>


                <div id={Style.settings_Div}>

                    <div id={Style.accountDiv}>
                        <button id={Style.accountText}>Account Settings</button>
                    </div>

                    <div id={Style.setting_img_EditDiv}>

                       {imgUrl ? <img id={Style.profile_img} src={imgUrl} alt="" /> : <img id={Style.profile_img} src={profile_img} alt="" /> }

                        <div onClick={() => editFun()}>
                            {editState ? <p id={Style.editText} style={{ color: "#FFFFFF", backgroundColor: "#0E093C" }}><img src={white_edit} alt="" /> Edit</p> : <p id={Style.editText} style={{ color: "#464646" }}><img src={edit} alt="" /> Edit</p>}
                        </div>

                    </div>

                   {
                        editState ?

                    <div id={Style.imageUpload}>
                        <label htmlFor="input_file"><img src={capture_two} alt="" />Change Cover</label>
                        <input type="file" id="input_file" name="imgURL" onChange={handleFile}/>
                    </div>: ""
                    }

                    {
                        !editState ?
                            <div id={Style.infoDetails_Div}>

                                <div id={Style.settings_informations}>
                                    <div>
                                        <p className={Style.settings_headerText}>First Name</p>
                                        <p className={Style.settings_detailsText}>John</p>
                                    </div>
                                    <div>
                                        <p className={Style.settings_headerText}>Last Name</p>
                                        <p className={Style.settings_detailsText}>Doe</p>
                                    </div>
                                </div>

                                <div id={Style.settings_informations}>
                                    <div >
                                        <p className={Style.settings_headerText}>Email address</p>
                                        <p className={Style.settings_detailsText}>Johndoe@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className={Style.settings_headerText}>Phone</p>
                                        <p className={Style.settings_detailsText}>+2348576477736</p>
                                    </div>
                                </div>
                            </div> : ""
                    }

                    {
                        editState ?

                            <form action="">
                                
                                <div id={Style.Input_mainDiv}>
                                    <div className={Style.InputDiv}>
                                        <Input
                                            type={"text"}
                                            placeholder={"Type your first name"}
                                            label={"First Name"} 
                                            name = {"firstName"}
                                            value ={profileUpdate.firstName}
                                            onChange ={HandleChange}/>

                                        <Input
                                            type={"text"}
                                            placeholder={"Type your Last name"}
                                            label={"Last Name"} 
                                            name = {"lastName"}
                                            value ={profileUpdate.lastName}
                                            onChange ={HandleChange}/>

                                    </div>

                                    <div className={Style.InputDiv}>
                                        <Input
                                            type={"email"}
                                            placeholder={"Type your email address"}
                                            label={"Email Address"}
                                            name ={"email"}
                                            value ={profileUpdate.email}
                                            onChange ={HandleChange}
                                        />
                                        <Input
                                            type={"tel"}
                                            placeholder={"Type your phone number"}
                                            label={"Phone"}
                                            name = {"phone"}
                                            value ={profileUpdate.phone}
                                            onChange ={HandleChange}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type={"submit"}
                                    text={"Upload Profile"}
                                    onSubmit ={HandleSubmit} />
                            </form> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile