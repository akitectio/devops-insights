import requests


class HttpClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def get(self, endpoint, params=None, headers=None):
        """ Gửi một yêu cầu GET. """
        url = f"{self.base_url}/{endpoint}"
        response = requests.get(url, params=params, headers=headers)
        return response

    def post(self, endpoint, data=None, json=None, headers=None):
        """ Gửi một yêu cầu POST. """
        url = f"{self.base_url}/{endpoint}"
        response = requests.post(url, data=data, json=json, headers=headers)
        return response


class HttpContentType:
    JSON = "application/json"
    FORM_URLENCODED = "application/x-www-form-urlencoded"
