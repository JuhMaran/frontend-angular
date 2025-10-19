import { ContainerCategory } from "../enums/container-category.enum";
import { ContainerType } from "../enums/container-type.enum";

/**
 * DTO de requisição para criação ou atualização de ContainerMeasure.
 */
export interface ContainerMeasureRequest {

    category: ContainerCategory;
    type: ContainerType;
    volumeMl: number;
    description?: string | null;

}
