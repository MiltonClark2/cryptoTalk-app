const express = require("express");
const favorites = express.Router({mergeParams: true});
const { 
    getFavoritesByUserId,
    createNewFavorite,
    deleteFavorite,

    getAllFavoritesAndAllUsers,
    getAllFavoritesForResources,
    getFavoritesAndUsername,
    getFavoritesResourcesOfVideo
    } = require("../queries/favorites.js");


// For query `getFavoritesByUserId` http://localhost:3333/favorites
favorites.get("/", async (req, res)=>{
    const { usersId } = req.params;
    try {
        const allFavorites = await getFavoritesByUserId(usersId);
        if(allFavorites[0]){
            res.status(200).json(allFavorites);
        }else{
            res.status(404).json({ error: "No favorites found" })
        }
    } catch (error){
        console.log(error);
    }
});

// Creating a favorite
favorites.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdResource = await createNewFavorite(body);
        if(createdResource.id){
            res.status(200).json(createdResource);
        } else {
            res.status(422).json({ error: "Favorites creation error" });
        }
    } catch(err){
        console.log(err);
    }
});

// Deleting a favorite
favorites.delete("/:id", async (req, res) => {
const { id } = req.params;

const deletedFavorite = await deleteFavorite(id);
if (deletedFavorite.id) {
    res.status(200).json(deletedFavorite);
} else {
    res.status(404).json({ error: "Favorite not found" });
}
});

module.exports = favorites;