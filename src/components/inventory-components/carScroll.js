import React, { useState, useEffect } from "react";
import { 
    Typography,  
    Paper,
    CardActionArea,
    CardMedia,
    CardContent} from '@material-ui/core';
    import { useHistory, generatePath } from 'react-router-dom';

// const carArray = [
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes Benz1",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
//         name: "Mercedes Benz2",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",
//         name: "Mercedes Benz3",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://www.nicepng.com/png/detail/936-9365791_free-png-download-car-png-images-background-png.png",
//         name: "Mercedes Benz4",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes Benz5",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes Benz6",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes Benz7",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes Benz8",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     },

// ];

const initialCars = {
    "data": [
        {
            "images": [
                "https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png",
                "https://freepngimg.com/thumb/car/6-2-car-png-file.png"
            ],
            "_id": "60c8648eae911b029c44306e",
            "name": "BMW 3ini",
            "price": "$00100.000",
            "description": "This is BMW car",
            "basic_specs": [
                {
                    "_id": "60c8648eae911b029c44306f",
                    "mileage": "27 MPG",
                    "engine": "RU I-4, 2.0L",
                    "drive_train": "FWD",
                    "style_name": "Tacoma TRD Sport",
                    "body_style": "SUV",
                    "brake_type": "4-Wheel Disc",
                    "air_bags": "All Seats",
                    "night_vision": "No",
                    "passanger_capacity": 5,
                    "abs_brake": "4-Wheel",
                    "backup_cam": "Yes",
                    "stereo_sound": "Yes",
                    "traction_control": "Yes",
                    "parking_assistant": "Yes",
                    "mp3_player": "Yes"
                }
            ],
            "__v": 0
        },
        {
            "images": [
                "https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png",
                "https://freepngimg.com/thumb/car/6-2-car-png-file.png"
            ],
            "_id": "60c864a5ae911b029c443070",
            "name": "BMW 5ini",
            "price": "$200.000",
            "description": "This is BMW car",
            "basic_specs": [
                {
                    "_id": "60c864a5ae911b029c443071",
                    "mileage": "27 MPG",
                    "engine": "RU I-4, 2.0L",
                    "drive_train": "FWD",
                    "style_name": "Tacoma TRD Sport",
                    "body_style": "SUV",
                    "brake_type": "4-Wheel Disc",
                    "air_bags": "All Seats",
                    "night_vision": "No",
                    "passanger_capacity": 5,
                    "abs_brake": "4-Wheel",
                    "backup_cam": "Yes",
                    "stereo_sound": "Yes",
                    "traction_control": "Yes",
                    "parking_assistant": "Yes",
                    "mp3_player": "Yes"
                }
            ],
            "__v": 0
        },
        {
            "images": [
                "https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png",
                "https://freepngimg.com/thumb/car/6-2-car-png-file.png"
            ],
            "_id": "60c864abae911b029c443072",
            "name": "BMW 4ini",
            "price": "$200.000",
            "description": "This is BMW car",
            "basic_specs": [
                {
                    "_id": "60c864abae911b029c443073",
                    "mileage": "27 MPG",
                    "engine": "RU I-4, 2.0L",
                    "drive_train": "FWD",
                    "style_name": "Tacoma TRD Sport",
                    "body_style": "SUV",
                    "brake_type": "4-Wheel Disc",
                    "air_bags": "All Seats",
                    "night_vision": "No",
                    "passanger_capacity": 5,
                    "abs_brake": "4-Wheel",
                    "backup_cam": "Yes",
                    "stereo_sound": "Yes",
                    "traction_control": "Yes",
                    "parking_assistant": "Yes",
                    "mp3_player": "Yes"
                }
            ],
            "__v": 0
        },
        {
            "images": [
                "https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png",
                "https://freepngimg.com/thumb/car/6-2-car-png-file.png"
            ],
            "_id": "60c864b0ae911b029c443074",
            "name": "BMW 6",
            "price": "$200.000",
            "description": "This is BMW car",
            "basic_specs": [
                {
                    "_id": "60c864b0ae911b029c443075",
                    "mileage": "27 MPG",
                    "engine": "RU I-4, 2.0L",
                    "drive_train": "FWD",
                    "style_name": "Tacoma TRD Sport",
                    "body_style": "SUV",
                    "brake_type": "4-Wheel Disc",
                    "air_bags": "All Seats",
                    "night_vision": "No",
                    "passanger_capacity": 5,
                    "abs_brake": "4-Wheel",
                    "backup_cam": "Yes",
                    "stereo_sound": "Yes",
                    "traction_control": "Yes",
                    "parking_assistant": "Yes",
                    "mp3_player": "Yes"
                }
            ],
            "__v": 0
        },
        
    ],
    "message": "List of all cars",
    "status": true,
    "code": 200
}


function CarScroll() {

    // const classes = useStyles();
    const [ carArray, setCarArray ] = useState(initialCars);
    const [ id, setId ] = useState();
    const history = useHistory();
    
    const getUrl = 'http://localhost:3000/cars';

    useEffect(()=>{
        fetch(getUrl)
        .then((res) => res.json())
        .then(res => {
            setCarArray(res);
        })
        .catch(err => console.log(err));
    },[])

    // useEffect(()=>{
    //     const loadAll = async () => {
    //         // console.log("useeffect of carscroll");
    //         await axios
    //         .get(getUrl)
    //         .then(res => {
    //             // console.log("id "+ id);
    //             // console.log("axios data", res);
    //             setCarArray(res);
    //             // console.log("cararray", carArray);
                
    //         })
    //         .catch((error) => {
    //             const response = error.response
    //             console.log(response.data.errors)
    //         }) 
    //     } 
    //     loadAll();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[getUrl]);

    // console.log("inicar", initialCars);
    // console.log("cararray", carArray);
    return(
        <div>
        {carArray.data.slice(0, 3).map((item) => (
            
            <Paper square elevation={0}>
                <CardActionArea 
                onClick={()=> {
                        setId(item._id);
                        console.log(id);
                        id && history.push(generatePath("/cars/:id", { id }))
                    }}>
                    <CardMedia
                    component="img"
                    alt="car1"
                    height="150"
                    image={item.images[1]}
                    title={item?.company}
                    
                    />
                <CardContent>
                    <Typography>
                    {item.company}{" "}{item.model}
                    </Typography>
                    ${item.price}
                </CardContent>
                </CardActionArea>
            </Paper>
        ))}
        </div>
    );
}

export default CarScroll;