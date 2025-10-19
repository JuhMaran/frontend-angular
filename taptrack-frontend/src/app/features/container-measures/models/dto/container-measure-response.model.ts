import { ContainerCategory } from "../enums/container-category.enum";
import { ContainerType } from "../enums/container-type.enum";

export interface ContainerMeasureResponse {

    id: number;
    category: ContainerCategory;
    type: ContainerType;
    volumeMl: number;
    description?: string | null;
    active: boolean;
    createdDate: string; // ISO-8601 String (LocalDateTikme no backend)
    updateDate: string;

}
