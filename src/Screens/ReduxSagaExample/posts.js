import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {getPosts, resetPost} from '../../Redux/Actions/postAction';

const Posts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.postReducer.isLoading);
  const posts = useSelector((state) => state.postReducer.posts);
  const error = useSelector((state) => state.postReducer.error);

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      dispatch(resetPost());
    };
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loading}>isLoading...</Text>
      ) : (
        <>
          {error ? (
            <Text style={styles.loading}>{error}</Text>
          ) : (
            <>
              <Text style={styles.heading}>Users</Text>
              {posts &&
                posts.map((item) => (
                  <View style={styles.card}>
                    <Text>{`Name: ${item.firstName} ${item.lastName}`}</Text>
                    <Text>{`Phone: ${item.phoneNumber}`}</Text>
                    <Text>{`Email: ${item.emailAddress}`}</Text>
                  </View>
                ))}
            </>
          )}
        </>
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    fontSize: 50,
    top: '50%',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    borderWidth: 0.5,
  },
  heading: {
    fontSize: 40,
    alignSelf: 'center',
  },
});
