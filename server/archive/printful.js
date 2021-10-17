try {
    const printFileURL = await getCloudinaryURL(font) //generate printfile, upload to cloudinary and get URL
    let response = await axios.post(`https://api.printful.com/orders`, {
      "recipient": {
              "name": name,
              "address1": address,
              "city": city,
              "state_code": state,
              "country_code": "GB",
              "zip": zip
          },
      "items": [
        {
          "variant_id": 11864,
          "files": [
              {
                  "type": "embroidery_chest_center",
                  "url": printFileURL
              }
          ],
          "options": [
              {
                  "id": "embroidery_type",
                  "value": "flat"
              },
              {
                  "id": "thread_colors",
                  "value": [
                      "#CC3333"
                  ]
              },
              {
                  "id": "thread_colors_chest_center",
                  "value": [
                      "#CC3333"
                  ]
              }
          ]
      }
      ]
    }, {
      headers: {
        "Authorization": "Basic N2lkOTFuYnItbTlkZC1lM3RvOjBidmcteGMzOWU4OXUybG85"
      }
    })

    console.log('code: ', response.data.code)
    console.log('order sent: ', response.data.result.dashboard_url)
    res.json('order submitted')
    } catch (err) {
      console.log(err.data)
    }