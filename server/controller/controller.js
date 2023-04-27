var Userdb = require("../model/model");
// const httpStatus = require("http-status-codes");
// create and save new user in project
exports.create = (req, res) => {
    // if req empty send a bad req message(400)
    if(!req.body){
        // let bad = httpStatus.BAD_REQUEST;
        res.status(400).send({message : "Content Can't Be Empty!"});
        return;
    }
	// new user set
    const user = new Userdb({
		name : req.body.name,
		email : req.body.email,
		gender : req.body.gender,
		status : req.body.status
    });
	// save user in atlas
	user
	.save(user)
	.then(data => {
		// res.send(data);
		res.redirect("/add-user");
			// alert("Data Inserted Successfuly!");
	})
	.catch(err => {
		res.status(500).send({message : err.message || "Internal Server Error when saving user "});
	});
};

// find and return all users & single user return

//edit tomorrow
// back we fix bug of line 35 we call users inside user that a error.
exports.find = (req, res) => {
	if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id});
                }else{
                    res.send(data);
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id});
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
            })
    }
};

// update users by ID
exports.update = (req, res) => {
	if(!req.body){
		return res
			.status(400)
			.send({message : "Data can't be updated because the form is empty"})
	}

	const id = req.params.id;
	Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
	.then(data => {
		if(!data){
		res.status(404).send({message : `Cannot Update user with ${id}. user not found!`})
		}else{
			res.send(data);		
		}
	})
	.catch(err => {
		res.status(500).send({message : "Error to update the user information"});
	});
};

// Delete user by id
exports.delete = (req, res) => {
	const id = req.params.id;

	Userdb.findByIdAndDelete(id)
	.then(data => {
	if(!data){
		res.status(404).send({message : `Cannot Delete user by ${id}. id not found!`});
	}else{
		res.send({message : "User was deleted with succes"});
	}
	})
	.catch(err => {
		res.status(500).send({message : "Cannot delete user by ID:" + id})
	})
};