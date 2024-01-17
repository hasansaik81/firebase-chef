import { useLoaderData, useParams, Navigate } from 'react-router-dom';
import Recipes from './ChefRecipes';
import './ChefRecipes.css'
import { Container } from 'react-bootstrap';

const ChefRecipes = () => {

    const recipes = useLoaderData()

    return (
        <Container className='bg-light'>
            <h3 className='text-center text-capitalize pb-3'>chef recipes</h3>
            
            <div className='singleCardsCotnainer'>
                {
                    recipes?.map((recipe) => <Recipes
                        key={recipe._id}
                        recipe={recipe}
                    ></Recipes>)
                }
                
                     console.log(recipes);
            </div>
        </Container>
    );
};

export default ChefRecipes;