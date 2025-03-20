import { IProjectGeneration } from 'src/types/project';

export class ProjectGenerationMapper {
  static fromApi(generation: Record<string, any>): IProjectGeneration {
    return {
      id: generation.id,
      createdAt: generation.createdAt,
      error: generation.error,
      logs: generation.log,
      projectId: generation.projectId,
      status: generation.status,
    };
  }
}
