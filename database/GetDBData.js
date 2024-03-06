import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name : 'recipes.db', createFromLocation : 1}, null, null);

export const sendSQLQuery = async (query) => {
    try {
      const results = await db.executeSql(query);
      return results.rows;
    } catch (error) {
      console.error(error);
      throw Error();
    }
};