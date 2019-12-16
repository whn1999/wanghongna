import ajax from './ajax'
export const reqAddress = geohash => ajax(`/position/${geohash}`)
export const reqCategorys = () => ajax('/index_category')
export const reqShops = ({ latitude, longitude }) => ajax('/shops', {
    latitude,
    longitude
})