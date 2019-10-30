import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer fB6kdu5jt3PiC_nRntnEH62qFtne1cCwbgfuTQbVDgnj9gdvt8UkSdoTJRuhjGZhyVIJU9eBJG6Yu4twmKD3cpck0fC0hKx0fatuwD8QhAl0AP7d4B8qQwADP6yxXXYx'
  }
});
// Client ID
// FKukC_Upd5igmX6vLC54CQ

// API Key
// fB6kdu5jt3PiC_nRntnEH62qFtne1cCwbgfuTQbVDgnj9gdvt8UkSdoTJRuhjGZhyVIJU9eBJG6Yu4twmKD3cpck0fC0hKx0fatuwD8QhAl0AP7d4B8qQwADP6yxXXYx