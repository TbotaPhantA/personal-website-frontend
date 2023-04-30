export type IResponse<StatusCode extends number, ResponseData> = {
  status: StatusCode,
  data: ResponseData,
}
