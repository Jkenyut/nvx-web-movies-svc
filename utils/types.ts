export interface Movie {
    id: number;
    title?: string;
    original_name?: string;
    backdrop_path: string | null;
    poster_path: string | null;
    overview: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: number;
}

export interface ApiResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
