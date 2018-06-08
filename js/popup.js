document.addEventListener('DOMContentLoaded', function() {
  let vpnAddressesData = {
    'Albania': ['vpn1', 'vpn2', 'vpn3'],
    'Austria': ['vpn1', 'vpn2', 'vpn3'],
    'Russia': ['vpn1', 'vpn2', 'vpn3'],
    'Brunei': ['vpn1', 'vpn2', 'vpn3'],
    'Argentina': ['vpn1', 'vpn2', 'vpn3'],
    'Germany': ['vpn1', 'vpn2', 'vpn3'],
    'England': ['vpn1', 'vpn2', 'vpn3','vpn4']
  };


  const addressList = document.getElementById('vpn-address-list');

  for(var key in vpnAddressesData) {
    let addressGroup = document.createElement('div');
    addressGroup.className = 'vpm-address-group';

    let addressCountry = document.createElement('div');
    addressCountry.innerText = key;
    addressCountry.className = 'vpm-address-country';

    addressGroup.appendChild(addressCountry);

    for(let i = 0; i < vpnAddressesData[key].length; ++i) {
      let addressItem = document.createElement('div');
      addressItem.innerText = vpnAddressesData[key][i];
      addressItem.className = 'vpn-address-item';
      addressGroup.appendChild(addressItem);

    }
    addressList.appendChild(addressGroup);
  }

});