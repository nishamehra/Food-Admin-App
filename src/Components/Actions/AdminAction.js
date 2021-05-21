import { firestore } from "../../firebase";

export const getNutrition = (onSuccess, onError) => {
	return (dispatch, getState) => {
        //firestore
		//const firestore = getFirestore()
		firestore.collection('NUTRITION').orderBy("name").get().then((querySnapshot) => {
            let nutrition = [];
			if(!querySnapshot.empty){
                console.log(querySnapshot);
                querySnapshot.forEach((doc)=>{
                    nutrition.push(doc.data());
                });
				dispatch({ type: 'LOAD_NUTRITION', payload: nutrition });
                onSuccess();
			}
        }).catch((error)=>{
                console.log(error);
                onError();
        });
	}
}

export const addNutrition = (data, onSuccess, onError) => {
    return(dispatch, getState) => {
        firestore
        .collection("NUTRITION")
        .doc(data.name.toUpperCase())
        .set(data)
        .then(function (doc) {
            dispatch({ type: 'ADD_NUTRITION', payload: data});
            onSuccess();   
        }).catch((error)=>{
            console.log(error);
            onError();
        })
    }
}

