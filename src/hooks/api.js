import axios from "axios";

export const getAllAnime = async () => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/animelist", {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });

        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};

export const getOngoingAnime = async () => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/ongoing", {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });
        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};
export const getOngoingAnimeMore = async (page) => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/ongoing/" + page, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });


        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};
export const getCompleteAnime = async () => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/complete", {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });


        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};
export const getCompleteAnimeMore = async (page) => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/complete/" + page, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });


        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};
export const getDetailAnime = async ({ slug }) => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/detail/" + slug, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });

        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};
export const getStreamDetailAnime = async ({ slug }) => {
    try {
        const response = await axios.get("https://apinime-beta.vercel.app/api/v1/stream/" + slug, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
        });

        return response.data; // Return the data directly
    } catch (err) {
        console.error("Error fetching ongoing anime:", err);
        throw err; // Rethrow the error for the calling component to handle
    }
};