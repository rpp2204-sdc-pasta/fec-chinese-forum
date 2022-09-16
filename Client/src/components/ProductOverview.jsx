import React from 'react';
import OverviewGallery from './ProductOverviewComponents/OverviewGallery.jsx';
import OverviewPrice from './ProductOverviewComponents/OverviewPrice.jsx';
import OverviewStyleSelect from './ProductOverviewComponents/OverviewStyleSelect.jsx';
import OverviewAddtoCart from './ProductOverviewComponents/OverviewAddtoCart.jsx';
import OverviewDescription from './ProductOverviewComponents/OverviewDescription.jsx';
import StarRating from './StarRating.jsx';
import axios from 'axios'

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currStyle: 444234,
      product: {
        "id": 71700,
        "campus": "hr-rpp",
        "name": "Slacker's Slacks",
        "slogan": "Comfortable for everything, or nothing",
        "description": "I'll tell you how great they are after I nap for a bit.",
        "category": "Pants",
        "default_price": "65.00",
        "created_at": "2022-05-11T19:38:15.373Z",
        "updated_at": "2022-05-11T19:38:15.373Z",
        "features": [
          {
            "feature": "Fabric",
            "value": "99% Cotton 1% Elastic"
          },
          {
            "feature": "Cut",
            "value": "Loose"
          }
        ],
        "styles": [
          {
            "style_id": 444234,
            "name": "Black",
            "original_price": "65.00",
            "sale_price": null,
            "default?": true,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580598": {
                "quantity": 8,
                "size": "XS"
              },
              "2580599": {
                "quantity": 16,
                "size": "S"
              },
              "2580600": {
                "quantity": 17,
                "size": "M"
              },
              "2580601": {
                "quantity": 10,
                "size": "L"
              },
              "2580602": {
                "quantity": 15,
                "size": "XL"
              },
              "2580603": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444235,
            "name": "Olive Green",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580604": {
                "quantity": 8,
                "size": "XS"
              },
              "2580605": {
                "quantity": 16,
                "size": "S"
              },
              "2580606": {
                "quantity": 17,
                "size": "M"
              },
              "2580607": {
                "quantity": 10,
                "size": "L"
              },
              "2580608": {
                "quantity": 15,
                "size": "XL"
              },
              "2580609": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444236,
            "name": "Grey",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580610": {
                "quantity": 8,
                "size": "XS"
              },
              "2580611": {
                "quantity": 16,
                "size": "S"
              },
              "2580612": {
                "quantity": 17,
                "size": "M"
              },
              "2580613": {
                "quantity": 10,
                "size": "L"
              },
              "2580614": {
                "quantity": 15,
                "size": "XL"
              },
              "2580615": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444237,
            "name": "Tan",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580616": {
                "quantity": 8,
                "size": "XS"
              },
              "2580617": {
                "quantity": 16,
                "size": "S"
              },
              "2580618": {
                "quantity": 17,
                "size": "M"
              },
              "2580619": {
                "quantity": 10,
                "size": "L"
              },
              "2580620": {
                "quantity": 15,
                "size": "XL"
              },
              "2580621": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444238,
            "name": "Red",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580622": {
                "quantity": 8,
                "size": "XS"
              },
              "2580623": {
                "quantity": 16,
                "size": "S"
              },
              "2580624": {
                "quantity": 17,
                "size": "M"
              },
              "2580625": {
                "quantity": 10,
                "size": "L"
              },
              "2580626": {
                "quantity": 15,
                "size": "XL"
              },
              "2580627": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444239,
            "name": "Pinstripe",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580628": {
                "quantity": 8,
                "size": "XS"
              },
              "2580629": {
                "quantity": 16,
                "size": "S"
              },
              "2580630": {
                "quantity": 17,
                "size": "M"
              },
              "2580631": {
                "quantity": 10,
                "size": "L"
              },
              "2580632": {
                "quantity": 15,
                "size": "XL"
              },
              "2580633": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444240,
            "name": "Khaki",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580634": {
                "quantity": 8,
                "size": "XS"
              },
              "2580635": {
                "quantity": 16,
                "size": "S"
              },
              "2580636": {
                "quantity": 17,
                "size": "M"
              },
              "2580637": {
                "quantity": 10,
                "size": "L"
              },
              "2580638": {
                "quantity": 15,
                "size": "XL"
              },
              "2580639": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444241,
            "name": "Plaid",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580640": {
                "quantity": 8,
                "size": "XS"
              },
              "2580641": {
                "quantity": 16,
                "size": "S"
              },
              "2580642": {
                "quantity": 17,
                "size": "M"
              },
              "2580643": {
                "quantity": 10,
                "size": "L"
              },
              "2580644": {
                "quantity": 15,
                "size": "XL"
              },
              "2580645": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 444242,
            "name": "White",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "2580646": {
                "quantity": 8,
                "size": "XS"
              },
              "2580647": {
                "quantity": 16,
                "size": "S"
              },
              "2580648": {
                "quantity": 17,
                "size": "M"
              },
              "2580649": {
                "quantity": 10,
                "size": "L"
              },
              "2580650": {
                "quantity": 15,
                "size": "XL"
              },
              "2580651": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          }
        ],
        "starRating": 4.25,
        "reviewCount": 76
      },
      expanded: false,
      mainImageIndex: 0,
      thumbnailRange: [0, 7]

    }
    this.changeStyle = this.changeStyle.bind(this);
    this.changeExpand = this.changeExpand.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.handleClickThumbnail = this.handleClickThumbnail.bind(this);
    this.handleMainImageScrollLeft = this.handleMainImageScrollLeft.bind(this);
    this.handleMainImageScrollRight = this.handleMainImageScrollRight.bind(this);
    this.handleThumbnailScrollUp = this.handleThumbnailScrollUp.bind(this);
    this.handleThumbnailScrollDown = this.handleThumbnailScrollDown.bind(this);
  }



  changeStyle(style_id) {
    this.setState({
      currStyle: style_id
    });

  }

  changeExpand(event) {
    this.setState({
      expanded: !this.state.expanded
    });

  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchData();
      this.setState({
        expanded: false,
        mainImageIndex: 0,
        thumbnailRange: [0, 7]
      });
    }
  }

  fetchData() {
    var options = {
      method: 'get',
      url: `/overview/${this.props.id}`
    }
    axios(options)
      .then((result) => {
        let defaultStyle = result.data.styles[0].style_id;
        if (result.data.styles.find((style) => style['default?'] === true)) {
          defaultStyle = (result.data.styles.find((style) => style['default?'] === true).style_id);
        }

        this.setState({
          product: result.data,
          isLoading: false,
          currStyle: defaultStyle
        });
        this.props.getName(result.data.name);
      })
      .catch(err => {
        console.log(err)
      });

  }

  handleClickThumbnail(index) {
    let targetIndex = parseInt(index) + parseInt(this.state.thumbnailRange[0]);
    this.setState({
      mainImageIndex: targetIndex
    });
  }

  handleThumbnailScrollUp() {
    let lowerRange = parseInt(this.state.thumbnailRange[0]) - 1;
    let upperRange = parseInt(this.state.thumbnailRange[1]) - 1;
    if ((lowerRange >= 0) && (upperRange >= 7)) {
      this.setState({
        thumbnailRange: [lowerRange, upperRange]
      });
    };
  }

  handleThumbnailScrollDown() {
    let lowerRange = parseInt(this.state.thumbnailRange[0]) + 1;
    let upperRange = parseInt(this.state.thumbnailRange[1]) + 1;
    if (upperRange <= this.state.product.styles.find(style => style.style_id === this.state.currStyle).photos.length) {
      this.setState({
        thumbnailRange: [lowerRange, upperRange]
      });
    };
  }

  handleMainImageScrollLeft() {
    let targetIndex = parseInt(this.state.mainImageIndex) - 1;
    if (targetIndex >= 0) {
      this.setState({
        mainImageIndex: targetIndex
      });
    };
    if (targetIndex <= this.state.thumbnailRange[0]) {
      this.handleThumbnailScrollUp();
    };
  }

  handleMainImageScrollRight() {
    let targetIndex = parseInt(this.state.mainImageIndex) + 1;
    if (targetIndex <= this.state.product.styles.find(style => style.style_id === this.state.currStyle).photos.length - 1) {
      this.setState({
        mainImageIndex: targetIndex
      });
    };
    if (targetIndex >= this.state.thumbnailRange[1]-1) {
      this.handleThumbnailScrollDown();
    };
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading Overview</div>
    }

    let OverviewRight =
      <div className='Overview-Right'>
        <div className='Overview-star-rating'>
          <StarRating rating={this.state.product.starRating} />
          <button onClick={this.props.handleScrollToReview}>Read All Reviews</button>
        </div>
        <h2 className="Overview-category">{this.state.product.category}</h2>
        <h1 className="Overview-title">{this.state.product.name}</h1>
        <OverviewPrice
          original_price={this.state.product.styles.find(style => style.style_id === this.state.currStyle).original_price}
          sale_price={this.state.product.styles.find(style => style.style_id === this.state.currStyle).sale_price} />
        <OverviewStyleSelect
          name={this.state.product.styles.find(style => style.style_id === this.state.currStyle).name}
          styles={this.state.product.styles}
          changeStyle={this.changeStyle}
          handleClickThumbnail={this.handleClickThumbnail} />
        <OverviewAddtoCart
          product={this.state.product}
          style_id={this.state.currStyle}
          skus={this.state.product.styles.find(style => style.style_id === this.state.currStyle).skus}
          key={new Date().getTime()}
          setRenderOutfit={this.props.setRenderOutfit} />
      </div>;

    let OverviewLeft =
      <OverviewGallery
        photos={this.state.product.styles.find(style => style.style_id === this.state.currStyle).photos}
        handleExpand={this.changeExpand}
        key={new Date().getTime()}
        mainImageIndex={this.state.mainImageIndex}
        thumbnailRange={this.state.thumbnailRange}
        handleClickThumbnail={this.handleClickThumbnail}
        handleMainImageScrollLeft={this.handleMainImageScrollLeft}
        handleMainImageScrollRight={this.handleMainImageScrollRight}
        handleThumbnailScrollUp={this.handleThumbnailScrollUp}
        handleThumbnailScrollDown={this.handleThumbnailScrollDown} />

    let isExpanded = this.state.expanded;

    return (
      <div className='Overview-main'>
        <div className='Overview-flexRowOne'>
          {isExpanded && <div className='Overview-LeftExpanded'>{OverviewLeft}</div>}
          <div className='Overview-LeftDefault'>
            {OverviewLeft}
          </div>
          {OverviewRight}

        </div>
        <div className='Overview-flexRowTwo'>
          <div className='Overview-Bottom'>
            <OverviewDescription
              slogan={this.state.product.slogan}
              overview={this.state.product.description}
              features={this.state.product.features}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
