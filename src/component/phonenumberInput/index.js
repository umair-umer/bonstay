const PhoneNumberComponent = () => {
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('US');
    const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  
    const onSelectCountry = (country) => {
      setCountryCode(country.cca2);
      setCountryPickerVisible(false);
      phoneInput.selectCountry(country.cca2.toLowerCase());
    };
  
    let phoneInput = null;
  
    return (
      <View style={styles.container}>
        <PhoneInput
          ref={(ref) => {
            phoneInput = ref;
          }}
          initialCountry={countryCode.toLowerCase()}
          onChangePhoneNumber={(number) => setPhone(number)}
          value={phone}
        />
        <CountryPicker
          {...{
            countryCode,
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
            withAlphaFilter: true,
            withCallingCode: true,
            onSelect: onSelectCountry,
            visible: countryPickerVisible,
          }}
        />
        {/* Add your button here to toggle country picker modal */}
        {/* ... other components */}
      </View>
    );
  };
  