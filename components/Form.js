import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, ActionSheetIOS } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {

    return (
      <View style={gStyle.main}>
          <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values) => {
              AddArticle(values);
              action.resetForm();
          }}>
              {(props) => (
                  <view>
                      <TextInput
                        style={styles.input}
                        value={props.values.name}
                        placeholder='Введите название'
                        onChangeText={props.handleChange('name')} />
                    <TextInput
                        style={styles.input}
                        value={props.values.anons}
                        multiline
                        placeholder='Введите анонс'
                        onChangeText={props.handleChange('anons')} />
                    <TextInput
                        style={styles.input}
                        value={props.values.full}
                        multiline
                        placeholder='Полный Текст'
                        onChangeText={props.handleChange('full')} />
                    <TextInput
                        style={styles.input}
                        value={props.values.img}
                        placeholder='Вставьте Картинку'
                        onChangeText={props.handleChange('img')} />
                        <button title='Добавить' onPress={props.handleSubmit} />
                  </view>
              )}

          </Formik>
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        paddint: 10,
        bordercolor: silver,
        borderRadius: 5
    }
});
