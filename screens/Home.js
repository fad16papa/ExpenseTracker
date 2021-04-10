import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';

const Home = () => {
  function renderNavBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', width: 50}}
          onPress={() => console.log('Back')}>
          <Image
            source={icons.back_arrow}
            style={{width: 30, height: 30, tinColor: COLORS.primary}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'flex-end', width: 50}}
          onPress={() => console.log('More')}>
          <Image
            source={icons.more}
            style={{width: 30, height: 30, tinColor: COLORS.primary}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        <View>
          <Text style={{color: COLORS.primary, ...FONTS.h2}}>My Expenses</Text>
          <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>
            Summary (private)
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.lightGray,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.calendar}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
          </View>
        </View>
        <View style={{marginLeft: SIZES.padding}}>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>11 Nov, 2020</Text>
          <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
            18% more than last month
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      {/*Nav bar section */}
      {renderNavBar()}

      {/*Header section */}
      {renderHeader()}
    </View>
  );
};

export default Home;
