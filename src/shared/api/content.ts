import { FullLesson, SimpleLesson } from "~/entities/lessons";
import { requests } from "../config/requests";

export async function loadLessonsList(): Promise<SimpleLesson[]> {
  const request = await requests.get("/data/lessons/simple");
  return request.data;
}

export async function loadLesson(pk: string): Promise<FullLesson> {
  const request = await requests.get(`/data/lessons/${pk}/full`);
  return request.data;
}
