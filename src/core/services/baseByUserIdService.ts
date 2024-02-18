import { AxiosResponse } from "axios";
import axiosInstance from "../interceptors/axiosInceptor";
import { BaseService } from './baseService';

export class BaseByUserIdService<
    GetAllType,
    GetByIdType,
    AddRequestType,
    AddResponseType,
    UpdateRequestType,
    UpdateResponseType,
    GetByUserIdType // Eklenen ByUserId tipi
> extends BaseService<GetAllType, GetByIdType, AddRequestType, AddResponseType, UpdateRequestType, UpdateResponseType> {
    
    // Kullanıcı ID'sine göre tüm kayıtları almak için kullanılan metod
    getAllByUserId(userId: string): Promise<AxiosResponse<GetByUserIdType, any>> {
        // API'den belirli bir kullanıcıya ait tüm kayıtları almak için kullanılan endpoint
        return axiosInstance.get<GetByUserIdType>(`${this.apiUrl}/GetListByUserId/${userId}`);
    }
}