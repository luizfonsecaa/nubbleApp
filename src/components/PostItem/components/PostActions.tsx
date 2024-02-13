import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: Implement likePost
  }

  function navigateToComments() {
    //TODO: Implement navigateToComments
  }

  function favoritePost() {
    //TODO: Implement favoritePost
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        marked={true}
        icon={{
          default: 'heart',
          market: 'heartFill',
        }}
        text={reactionCount}
      />
      <Item
        onPress={navigateToComments}
        marked={false}
        icon={{
          default: 'comment',
          market: 'comment',
        }}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        marked={true}
        icon={{
          default: 'bookmark',
          market: 'bookmarkFill',
        }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    market: IconProps['name'];
  };
  text: number;
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.market : icon.default}
      />
      {text > 0 && (
        <Text bold preset="paragraphSmall" ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
