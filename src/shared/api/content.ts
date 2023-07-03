import { FullLesson, SimpleLesson } from "~/entities/lessons";
import { requests } from "../config/requests";
import { Chord } from "~/entities/chords";

export async function loadLessonsList(): Promise<SimpleLesson[]> {
  const request = await requests.get("/data/lessons/simple");
  return request.data;
}

export async function loadLesson(pk: string): Promise<FullLesson> {
  const request = await requests.get(`/data/lessons/${pk}/full`);
  return request.data;
}

export async function loadHowtoplaysList(): Promise<SimpleLesson[]> {
  const request = await requests.get("/data/howtoplays/simple");
  return request.data;
}

export async function loadHowtoplay(pk: string): Promise<FullLesson> {
  const request = await requests.get(`/data/howtoplays/${pk}/full`);
  return request.data;
}

export async function loadChords(): Promise<Chord[]> {
  const request = await requests.get("/data/chords/");
  return request.data;
}
