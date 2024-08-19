import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function GitHub() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="logo-github" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GitHub</ThemedText>
      </ThemedView>
      <ThemedText>Check out my GitHub profile:</ThemedText>
      <ExternalLink href="https://github.com/DomKageUI">
        <ThemedText type="link">Visit GitHub</ThemedText>
      </ExternalLink>
      <Collapsible title="Repositories">
        <ThemedText>
          You can find all my public repositories on my GitHub profile.
        </ThemedText>
        <ExternalLink href="https://github.com/DomKageUI?tab=repositories">
          <ThemedText type="link">See Repositories</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Contributions">
        <ThemedText>
          My contributions graph shows how active I am in open-source projects.
        </ThemedText>
        <ExternalLink href="https://github.com/DomKageUI">
          <ThemedText type="link">View Contributions</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#a600c5',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
