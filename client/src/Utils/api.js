const {REACT_APP_API_URL,REACT_APP_DEV_API_URL,NODE_ENV,REACT_APP_STAGING_API_URL,REACT_APP_PROD_ENV} = process.env

const setUrl = (REACT_APP_PROD_ENV === 'true')
?REACT_APP_API_URL
:REACT_APP_STAGING_API_URL


export const apiURL =(NODE_ENV ==='production')
?setUrl+'userLocation'
:REACT_APP_DEV_API_URL

export const apiUser =(NODE_ENV ==='production')
?setUrl+'userLocation'
:REACT_APP_DEV_API_URL+'user/'
