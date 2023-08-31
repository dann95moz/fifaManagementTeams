import { Team } from "./team.interface";

export interface ListTeams {
    content:          Team[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    first:            boolean;
    numberOfElements: number;
    sort:             Sort;
    size:             number;
    number:           number;
    empty:            boolean;
}



export interface Pageable {
    sort:       Sort;
    pageSize:   number;
    pageNumber: number;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}
