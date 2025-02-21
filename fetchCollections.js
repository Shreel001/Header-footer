async function fetchCollections() {
    const apiUrl = "https://api-ca.hosted.exlibrisgroup.com/almaws/v1/bibs/collections?level=1&apikey=YOUR_API_KEY";
    const apiKey = "YOUR_API_KEY";

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${apiKey}`
            }
        });

        // Check if the response is OK (200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract and display collection names
        if (data && data.collection) {
            const collections = data.collection;
            const collectionInfo = collections.map(collection => ({name: collection.name, thumbnailUrl: "https://ca01.alma.exlibrisgroup.com" + collection.thumbnail}));

            // console.log(collectionInfo)
            return collectionInfo;
            
        } else {
            console.error("No collections found in response.");
        }

    } catch (error) {
        console.error("Error fetching collections:", error);
    }
}

// Call the function to fetch data
fetchCollections().then(data=>console.log(data));