import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";

interface OneLessonSettings {
  videoVisible: boolean;
  chordsVisible: boolean;
  beatsVisible: boolean;
  schemesVisible: boolean;
  additionsVisible: boolean;
  isLessonComplite: boolean;
  isLessonFavorite: boolean;
}

interface LessonsSettings {
  settings: { [lessonPk: number]: OneLessonSettings };
  getSettingsByPk: (lessonPk: number) => OneLessonSettings;
  toggleSettingsField: (
    lessonPk: number,
    fieldName: keyof OneLessonSettings
  ) => void;
  toggleVideoVisible: (lessonPk: number) => void;
  toggleChordsVisible: (lessonPk: number) => void;
  toggleBeatsVisible: (lessonPk: number) => void;
  toggleSchemesVisible: (lessonPk: number) => void;
  toggleAdditionsVisible: (lessonPk: number) => void;
  toggleIsLessonComplite: (lessonPk: number) => void;
  toggleIsLessonFavorite: (lessonPk: number) => void;
}

const defaultLessonSettings: OneLessonSettings = {
  videoVisible: true,
  chordsVisible: true,
  beatsVisible: true,
  schemesVisible: true,
  additionsVisible: true,
  isLessonComplite: false,
  isLessonFavorite: false,
};

export const useLessonSettings = create<LessonsSettings>()(
  persist(
    (set, get) => ({
      settings: [],
      getSettingsByPk: (lessonPk: number): OneLessonSettings => {
        const lessonSettings = get().settings[lessonPk];
        if (!lessonSettings) {
          set(
            produce((state) => {
              state.settings[lessonPk] = defaultLessonSettings;
            })
          );
          return defaultLessonSettings;
        }
        return lessonSettings;
      },
      toggleSettingsField: (
        lessonPk: number,
        fieldName: keyof OneLessonSettings
      ) => {
        try {
          set(
            produce((state) => {
              state.settings[lessonPk][fieldName] =
                !state.settings[lessonPk][fieldName];
            })
          );
        } catch (e: unknown) {
          const newSettings: OneLessonSettings = {
            ...defaultLessonSettings,
            [fieldName]: !defaultLessonSettings[fieldName],
          };
          set(
            produce((state) => {
              state.settings[lessonPk] = newSettings;
            })
          );
        }
      },
      toggleVideoVisible: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "videoVisible");
      },
      toggleChordsVisible: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "chordsVisible");
      },
      toggleBeatsVisible: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "beatsVisible");
      },
      toggleSchemesVisible: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "schemesVisible");
      },
      toggleAdditionsVisible: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "additionsVisible");
      },
      toggleIsLessonComplite: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "isLessonComplite");
      },
      toggleIsLessonFavorite: (lessonPk: number) => {
        get().toggleSettingsField(lessonPk, "isLessonFavorite");
      },
    }),
    {
      name: "lessonssettings",
    }
  )
);
