export interface FetchedDogBreeds {
    message: DogBreedData,
    status: string;
}

export type DogBreedData = {
    [key: string]: any[]
}

// object of key and empty array