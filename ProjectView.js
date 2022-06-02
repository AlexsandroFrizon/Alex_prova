import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectTable from './ProjectTable';
import { ProjectContextProvider } from './ProjectContextProvider';
import { Text, View } from 'react-native';

function ProjectView() {
  return (
    <ProjectContextProvider>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: 50,
          borderRadius: 25,
          innerWidth: 90
        }}
      >
        <Text variant="h5" align="center" style={{ marginBottom: 10 }}>
          Prova P1 - Projetos
        </Text>
        <ProjectForm />
        <ProjectTable />
      </View>
    </ProjectContextProvider>
  );
}

export default ProjectView;