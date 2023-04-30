export type ResponseWrapper<StatusCode extends number, ResponseData> = {
  status: StatusCode,
  data: ResponseData,
}
