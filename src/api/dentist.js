const BASE_URL = 'http://localhost/reactCopy';

export const fetchDentistData = async () =>{
    try {
        const response = await fetch (`${BASE_URL}/dentist.php`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
    catch (error){
        throw new Error(`Error fetching testimonials data: ${error.message}`);
    }
};