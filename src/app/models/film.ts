export interface Film {
    id: string | null;
    title: string | null;
    original_title: string | null;
    original_title_romanised: string | null;
    image: string | null;
    movie_banner: string | null;
    description: string | null;
    director: string | null;
    producer: string | null;
    release_date: string | null;
    running_time: string | null;
    rt_score: string | null;
    people: string[] | null;
    species: string[] | null;
    vehicles: string[] | null;
    url: string | null;
}