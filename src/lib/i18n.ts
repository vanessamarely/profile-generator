export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ja' | 'zh';

export interface Translations {
  app: {
    title: string;
    subtitle: string;
  };
  actions: {
    copy: string;
    download: string;
    add: string;
    remove: string;
    edit: string;
    save: string;
    cancel: string;
    preview: string;
    export: string;
  };
  tabs: {
    edit: string;
    preview: string;
  };
  sections: {
    addSection: string;
    startBuilding: string;
    startBuildingDesc: string;
    header: {
      name: string;
      description: string;
      fields: {
        name: string;
        tagline: string;
        bannerUrl: string;
        githubUsername: string;
        showGithubProfile: string;
      };
    };
    about: {
      name: string;
      description: string;
      fields: {
        content: string;
        githubUsername: string;
        showGithubProfile: string;
      };
    };
    skills: {
      name: string;
      description: string;
      fields: {
        addSkill: string;
        skillName: string;
      };
    };
    stats: {
      name: string;
      description: string;
      fields: {
        username: string;
        showStats: string;
        showStreak: string;
        showLanguages: string;
        theme: string;
      };
    };
    badges: {
      name: string;
      description: string;
      fields: {
        addBadge: string;
        type: string;
        label: string;
        message: string;
        color: string;
        logo: string;
        logoColor: string;
        style: string;
        labelColor: string;
        link: string;
      };
    };
    socials: {
      name: string;
      description: string;
      fields: {
        addLink: string;
        platform: string;
        url: string;
        username: string;
      };
    };
    techstack: {
      name: string;
      description: string;
      fields: {
        variableName: string;
        code: string;
        tools: string;
        architecture: string;
        customFields: string;
        addCustomField: string;
        key: string;
        value: string;
      };
    };
    streaming: {
      name: string;
      description: string;
      fields: {
        addChannel: string;
        addVideo: string;
        platform: string;
        url: string;
        username: string;
        videoTitle: string;
      };
    };
    trophy: {
      name: string;
      description: string;
      fields: {
        username: string;
        theme: string;
        columns: string;
        noFrame: string;
        noBackground: string;
        marginWidth: string;
        marginHeight: string;
      };
    };
    contributions: {
      name: string;
      description: string;
      fields: {
        username: string;
        theme: string;
        hideTitle: string;
      };
    };
    certifications: {
      name: string;
      description: string;
      fields: {
        addCertification: string;
        template: string;
        name: string;
        issuer: string;
        date: string;
        credentialId: string;
        credentialUrl: string;
        icon: string;
        color: string;
        description: string;
      };
    };
  };
  notifications: {
    sectionAdded: string;
    sectionRemoved: string;
    copied: string;
    copyFailed: string;
    downloaded: string;
    downloadFailed: string;
    exported: string;
    exportFailed: string;
  };
  export: {
    title: string;
    description: string;
    formats: {
      markdown: string;
      html: string;
      pdf: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    app: {
      title: 'README Profile Generator',
      subtitle: 'Create a stunning GitHub profile README with live preview',
    },
    actions: {
      copy: 'Copy Markdown',
      download: 'Download',
      add: 'Add',
      remove: 'Remove',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      preview: 'Preview',
      export: 'Export',
    },
    tabs: {
      edit: 'Edit',
      preview: 'Preview',
    },
    sections: {
      addSection: 'Add Section',
      startBuilding: 'Start Building Your README',
      startBuildingDesc: 'Add sections above to create your personalized GitHub profile',
      header: {
        name: 'Header',
        description: 'Name, title, and banner',
        fields: {
          name: 'Name',
          tagline: 'Tagline',
          bannerUrl: 'Banner URL',
          githubUsername: 'GitHub Username',
          showGithubProfile: 'Show GitHub Profile',
        },
      },
      about: {
        name: 'About Me',
        description: 'Bio and introduction',
        fields: {
          content: 'About Me',
          githubUsername: 'GitHub Username',
          showGithubProfile: 'Show GitHub Profile',
        },
      },
      skills: {
        name: 'Skills',
        description: 'Technology stack',
        fields: {
          addSkill: 'Add Skill',
          skillName: 'Skill Name',
        },
      },
      stats: {
        name: 'GitHub Stats',
        description: 'Stats and streaks',
        fields: {
          username: 'GitHub Username',
          showStats: 'Show Stats',
          showStreak: 'Show Streak',
          showLanguages: 'Show Top Languages',
          theme: 'Theme',
        },
      },
      badges: {
        name: 'Badges',
        description: 'Tech badges',
        fields: {
          addBadge: 'Add Badge',
          type: 'Type',
          label: 'Label',
          message: 'Message',
          color: 'Color',
          logo: 'Logo',
          logoColor: 'Logo Color',
          style: 'Style',
          labelColor: 'Label Color',
          link: 'Link',
        },
      },
      socials: {
        name: 'Social Links',
        description: 'Contact and profiles',
        fields: {
          addLink: 'Add Link',
          platform: 'Platform',
          url: 'URL',
          username: 'Username',
        },
      },
      techstack: {
        name: 'Tech Stack (Code)',
        description: 'Code-style tech overview',
        fields: {
          variableName: 'Variable Name',
          code: 'Code Languages',
          tools: 'Tools & Frameworks',
          architecture: 'Architecture',
          customFields: 'Custom Fields',
          addCustomField: 'Add Custom Field',
          key: 'Key',
          value: 'Value',
        },
      },
      streaming: {
        name: 'Video & Streaming',
        description: 'YouTube/Twitch channels',
        fields: {
          addChannel: 'Add Channel',
          addVideo: 'Add Video',
          platform: 'Platform',
          url: 'URL',
          username: 'Username',
          videoTitle: 'Video Title',
        },
      },
      trophy: {
        name: 'GitHub Trophies',
        description: 'Achievement showcase',
        fields: {
          username: 'GitHub Username',
          theme: 'Theme',
          columns: 'Columns',
          noFrame: 'No Frame',
          noBackground: 'No Background',
          marginWidth: 'Margin Width',
          marginHeight: 'Margin Height',
        },
      },
      contributions: {
        name: 'Contribution Graph',
        description: 'Activity heatmap',
        fields: {
          username: 'GitHub Username',
          theme: 'Theme',
          hideTitle: 'Hide Title',
        },
      },
      certifications: {
        name: 'Certifications',
        description: 'Achievements & certs',
        fields: {
          addCertification: 'Add Certification',
          template: 'Template',
          name: 'Name',
          issuer: 'Issuer',
          date: 'Date',
          credentialId: 'Credential ID',
          credentialUrl: 'Credential URL',
          icon: 'Icon',
          color: 'Color',
          description: 'Description',
        },
      },
    },
    notifications: {
      sectionAdded: 'Section added',
      sectionRemoved: 'Section removed',
      copied: 'Copied to clipboard!',
      copyFailed: 'Failed to copy',
      downloaded: 'Downloaded README.md',
      downloadFailed: 'Failed to download file',
      exported: 'Exported successfully',
      exportFailed: 'Failed to export',
    },
    export: {
      title: 'Export README',
      description: 'Choose your export format',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  es: {
    app: {
      title: 'Generador de Perfil README',
      subtitle: 'Crea un impresionante README de perfil de GitHub con vista previa en vivo',
    },
    actions: {
      copy: 'Copiar Markdown',
      download: 'Descargar',
      add: 'Agregar',
      remove: 'Eliminar',
      edit: 'Editar',
      save: 'Guardar',
      cancel: 'Cancelar',
      preview: 'Vista previa',
      export: 'Exportar',
    },
    tabs: {
      edit: 'Editar',
      preview: 'Vista previa',
    },
    sections: {
      addSection: 'Agregar Sección',
      startBuilding: 'Comienza a Construir tu README',
      startBuildingDesc: 'Agrega secciones arriba para crear tu perfil personalizado de GitHub',
      header: {
        name: 'Encabezado',
        description: 'Nombre, título y banner',
        fields: {
          name: 'Nombre',
          tagline: 'Eslogan',
          bannerUrl: 'URL del Banner',
          githubUsername: 'Usuario de GitHub',
          showGithubProfile: 'Mostrar Perfil de GitHub',
        },
      },
      about: {
        name: 'Sobre Mí',
        description: 'Biografía e introducción',
        fields: {
          content: 'Sobre Mí',
          githubUsername: 'Usuario de GitHub',
          showGithubProfile: 'Mostrar Perfil de GitHub',
        },
      },
      skills: {
        name: 'Habilidades',
        description: 'Stack tecnológico',
        fields: {
          addSkill: 'Agregar Habilidad',
          skillName: 'Nombre de la Habilidad',
        },
      },
      stats: {
        name: 'Estadísticas de GitHub',
        description: 'Estadísticas y rachas',
        fields: {
          username: 'Usuario de GitHub',
          showStats: 'Mostrar Estadísticas',
          showStreak: 'Mostrar Racha',
          showLanguages: 'Mostrar Lenguajes Principales',
          theme: 'Tema',
        },
      },
      badges: {
        name: 'Insignias',
        description: 'Insignias tecnológicas',
        fields: {
          addBadge: 'Agregar Insignia',
          type: 'Tipo',
          label: 'Etiqueta',
          message: 'Mensaje',
          color: 'Color',
          logo: 'Logo',
          logoColor: 'Color del Logo',
          style: 'Estilo',
          labelColor: 'Color de Etiqueta',
          link: 'Enlace',
        },
      },
      socials: {
        name: 'Enlaces Sociales',
        description: 'Contacto y perfiles',
        fields: {
          addLink: 'Agregar Enlace',
          platform: 'Plataforma',
          url: 'URL',
          username: 'Usuario',
        },
      },
      techstack: {
        name: 'Stack Tecnológico (Código)',
        description: 'Resumen técnico estilo código',
        fields: {
          variableName: 'Nombre de Variable',
          code: 'Lenguajes de Código',
          tools: 'Herramientas y Frameworks',
          architecture: 'Arquitectura',
          customFields: 'Campos Personalizados',
          addCustomField: 'Agregar Campo Personalizado',
          key: 'Clave',
          value: 'Valor',
        },
      },
      streaming: {
        name: 'Video y Streaming',
        description: 'Canales de YouTube/Twitch',
        fields: {
          addChannel: 'Agregar Canal',
          addVideo: 'Agregar Video',
          platform: 'Plataforma',
          url: 'URL',
          username: 'Usuario',
          videoTitle: 'Título del Video',
        },
      },
      trophy: {
        name: 'Trofeos de GitHub',
        description: 'Vitrina de logros',
        fields: {
          username: 'Usuario de GitHub',
          theme: 'Tema',
          columns: 'Columnas',
          noFrame: 'Sin Marco',
          noBackground: 'Sin Fondo',
          marginWidth: 'Ancho de Margen',
          marginHeight: 'Alto de Margen',
        },
      },
      contributions: {
        name: 'Gráfico de Contribuciones',
        description: 'Mapa de calor de actividad',
        fields: {
          username: 'Usuario de GitHub',
          theme: 'Tema',
          hideTitle: 'Ocultar Título',
        },
      },
      certifications: {
        name: 'Certificaciones',
        description: 'Logros y certificaciones',
        fields: {
          addCertification: 'Agregar Certificación',
          template: 'Plantilla',
          name: 'Nombre',
          issuer: 'Emisor',
          date: 'Fecha',
          credentialId: 'ID de Credencial',
          credentialUrl: 'URL de Credencial',
          icon: 'Icono',
          color: 'Color',
          description: 'Descripción',
        },
      },
    },
    notifications: {
      sectionAdded: 'Sección agregada',
      sectionRemoved: 'Sección eliminada',
      copied: '¡Copiado al portapapeles!',
      copyFailed: 'Error al copiar',
      downloaded: 'README.md descargado',
      downloadFailed: 'Error al descargar archivo',
      exported: 'Exportado exitosamente',
      exportFailed: 'Error al exportar',
    },
    export: {
      title: 'Exportar README',
      description: 'Elige tu formato de exportación',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  fr: {
    app: {
      title: 'Générateur de Profil README',
      subtitle: 'Créez un superbe README de profil GitHub avec aperçu en direct',
    },
    actions: {
      copy: 'Copier Markdown',
      download: 'Télécharger',
      add: 'Ajouter',
      remove: 'Supprimer',
      edit: 'Modifier',
      save: 'Enregistrer',
      cancel: 'Annuler',
      preview: 'Aperçu',
      export: 'Exporter',
    },
    tabs: {
      edit: 'Modifier',
      preview: 'Aperçu',
    },
    sections: {
      addSection: 'Ajouter une Section',
      startBuilding: 'Commencez à Construire Votre README',
      startBuildingDesc: 'Ajoutez des sections ci-dessus pour créer votre profil GitHub personnalisé',
      header: {
        name: 'En-tête',
        description: 'Nom, titre et bannière',
        fields: {
          name: 'Nom',
          tagline: 'Slogan',
          bannerUrl: 'URL de la Bannière',
          githubUsername: 'Nom d\'utilisateur GitHub',
          showGithubProfile: 'Afficher le Profil GitHub',
        },
      },
      about: {
        name: 'À Propos de Moi',
        description: 'Bio et introduction',
        fields: {
          content: 'À Propos de Moi',
          githubUsername: 'Nom d\'utilisateur GitHub',
          showGithubProfile: 'Afficher le Profil GitHub',
        },
      },
      skills: {
        name: 'Compétences',
        description: 'Stack technologique',
        fields: {
          addSkill: 'Ajouter Compétence',
          skillName: 'Nom de la Compétence',
        },
      },
      stats: {
        name: 'Statistiques GitHub',
        description: 'Stats et séries',
        fields: {
          username: 'Nom d\'utilisateur GitHub',
          showStats: 'Afficher les Stats',
          showStreak: 'Afficher la Série',
          showLanguages: 'Afficher les Langages Principaux',
          theme: 'Thème',
        },
      },
      badges: {
        name: 'Badges',
        description: 'Badges technologiques',
        fields: {
          addBadge: 'Ajouter Badge',
          type: 'Type',
          label: 'Étiquette',
          message: 'Message',
          color: 'Couleur',
          logo: 'Logo',
          logoColor: 'Couleur du Logo',
          style: 'Style',
          labelColor: 'Couleur de l\'Étiquette',
          link: 'Lien',
        },
      },
      socials: {
        name: 'Liens Sociaux',
        description: 'Contact et profils',
        fields: {
          addLink: 'Ajouter Lien',
          platform: 'Plateforme',
          url: 'URL',
          username: 'Nom d\'utilisateur',
        },
      },
      techstack: {
        name: 'Stack Tech (Code)',
        description: 'Aperçu technique style code',
        fields: {
          variableName: 'Nom de Variable',
          code: 'Langages de Code',
          tools: 'Outils et Frameworks',
          architecture: 'Architecture',
          customFields: 'Champs Personnalisés',
          addCustomField: 'Ajouter Champ Personnalisé',
          key: 'Clé',
          value: 'Valeur',
        },
      },
      streaming: {
        name: 'Vidéo et Streaming',
        description: 'Chaînes YouTube/Twitch',
        fields: {
          addChannel: 'Ajouter Chaîne',
          addVideo: 'Ajouter Vidéo',
          platform: 'Plateforme',
          url: 'URL',
          username: 'Nom d\'utilisateur',
          videoTitle: 'Titre de la Vidéo',
        },
      },
      trophy: {
        name: 'Trophées GitHub',
        description: 'Vitrine de réalisations',
        fields: {
          username: 'Nom d\'utilisateur GitHub',
          theme: 'Thème',
          columns: 'Colonnes',
          noFrame: 'Sans Cadre',
          noBackground: 'Sans Fond',
          marginWidth: 'Largeur de Marge',
          marginHeight: 'Hauteur de Marge',
        },
      },
      contributions: {
        name: 'Graphique de Contributions',
        description: 'Carte thermique d\'activité',
        fields: {
          username: 'Nom d\'utilisateur GitHub',
          theme: 'Thème',
          hideTitle: 'Masquer le Titre',
        },
      },
      certifications: {
        name: 'Certifications',
        description: 'Réalisations et certificats',
        fields: {
          addCertification: 'Ajouter Certification',
          template: 'Modèle',
          name: 'Nom',
          issuer: 'Émetteur',
          date: 'Date',
          credentialId: 'ID de Credential',
          credentialUrl: 'URL de Credential',
          icon: 'Icône',
          color: 'Couleur',
          description: 'Description',
        },
      },
    },
    notifications: {
      sectionAdded: 'Section ajoutée',
      sectionRemoved: 'Section supprimée',
      copied: 'Copié dans le presse-papiers!',
      copyFailed: 'Échec de la copie',
      downloaded: 'README.md téléchargé',
      downloadFailed: 'Échec du téléchargement',
      exported: 'Exporté avec succès',
      exportFailed: 'Échec de l\'exportation',
    },
    export: {
      title: 'Exporter README',
      description: 'Choisissez votre format d\'exportation',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  de: {
    app: {
      title: 'README Profil Generator',
      subtitle: 'Erstellen Sie ein beeindruckendes GitHub-Profil README mit Live-Vorschau',
    },
    actions: {
      copy: 'Markdown Kopieren',
      download: 'Herunterladen',
      add: 'Hinzufügen',
      remove: 'Entfernen',
      edit: 'Bearbeiten',
      save: 'Speichern',
      cancel: 'Abbrechen',
      preview: 'Vorschau',
      export: 'Exportieren',
    },
    tabs: {
      edit: 'Bearbeiten',
      preview: 'Vorschau',
    },
    sections: {
      addSection: 'Abschnitt Hinzufügen',
      startBuilding: 'Beginnen Sie mit dem Erstellen Ihrer README',
      startBuildingDesc: 'Fügen Sie oben Abschnitte hinzu, um Ihr personalisiertes GitHub-Profil zu erstellen',
      header: {
        name: 'Kopfzeile',
        description: 'Name, Titel und Banner',
        fields: {
          name: 'Name',
          tagline: 'Slogan',
          bannerUrl: 'Banner-URL',
          githubUsername: 'GitHub-Benutzername',
          showGithubProfile: 'GitHub-Profil Anzeigen',
        },
      },
      about: {
        name: 'Über Mich',
        description: 'Biografie und Einführung',
        fields: {
          content: 'Über Mich',
          githubUsername: 'GitHub-Benutzername',
          showGithubProfile: 'GitHub-Profil Anzeigen',
        },
      },
      skills: {
        name: 'Fähigkeiten',
        description: 'Technologie-Stack',
        fields: {
          addSkill: 'Fähigkeit Hinzufügen',
          skillName: 'Fähigkeitsname',
        },
      },
      stats: {
        name: 'GitHub-Statistiken',
        description: 'Statistiken und Streaks',
        fields: {
          username: 'GitHub-Benutzername',
          showStats: 'Statistiken Anzeigen',
          showStreak: 'Streak Anzeigen',
          showLanguages: 'Top-Sprachen Anzeigen',
          theme: 'Thema',
        },
      },
      badges: {
        name: 'Abzeichen',
        description: 'Tech-Abzeichen',
        fields: {
          addBadge: 'Abzeichen Hinzufügen',
          type: 'Typ',
          label: 'Beschriftung',
          message: 'Nachricht',
          color: 'Farbe',
          logo: 'Logo',
          logoColor: 'Logo-Farbe',
          style: 'Stil',
          labelColor: 'Beschriftungsfarbe',
          link: 'Link',
        },
      },
      socials: {
        name: 'Social Links',
        description: 'Kontakt und Profile',
        fields: {
          addLink: 'Link Hinzufügen',
          platform: 'Plattform',
          url: 'URL',
          username: 'Benutzername',
        },
      },
      techstack: {
        name: 'Tech Stack (Code)',
        description: 'Tech-Übersicht im Code-Stil',
        fields: {
          variableName: 'Variablenname',
          code: 'Code-Sprachen',
          tools: 'Werkzeuge und Frameworks',
          architecture: 'Architektur',
          customFields: 'Benutzerdefinierte Felder',
          addCustomField: 'Benutzerdefiniertes Feld Hinzufügen',
          key: 'Schlüssel',
          value: 'Wert',
        },
      },
      streaming: {
        name: 'Video & Streaming',
        description: 'YouTube/Twitch-Kanäle',
        fields: {
          addChannel: 'Kanal Hinzufügen',
          addVideo: 'Video Hinzufügen',
          platform: 'Plattform',
          url: 'URL',
          username: 'Benutzername',
          videoTitle: 'Videotitel',
        },
      },
      trophy: {
        name: 'GitHub-Trophäen',
        description: 'Erfolge präsentieren',
        fields: {
          username: 'GitHub-Benutzername',
          theme: 'Thema',
          columns: 'Spalten',
          noFrame: 'Kein Rahmen',
          noBackground: 'Kein Hintergrund',
          marginWidth: 'Randbreite',
          marginHeight: 'Randhöhe',
        },
      },
      contributions: {
        name: 'Beitrags-Diagramm',
        description: 'Aktivitäts-Heatmap',
        fields: {
          username: 'GitHub-Benutzername',
          theme: 'Thema',
          hideTitle: 'Titel Ausblenden',
        },
      },
      certifications: {
        name: 'Zertifizierungen',
        description: 'Erfolge und Zertifikate',
        fields: {
          addCertification: 'Zertifizierung Hinzufügen',
          template: 'Vorlage',
          name: 'Name',
          issuer: 'Aussteller',
          date: 'Datum',
          credentialId: 'Credential-ID',
          credentialUrl: 'Credential-URL',
          icon: 'Symbol',
          color: 'Farbe',
          description: 'Beschreibung',
        },
      },
    },
    notifications: {
      sectionAdded: 'Abschnitt hinzugefügt',
      sectionRemoved: 'Abschnitt entfernt',
      copied: 'In die Zwischenablage kopiert!',
      copyFailed: 'Kopieren fehlgeschlagen',
      downloaded: 'README.md heruntergeladen',
      downloadFailed: 'Download fehlgeschlagen',
      exported: 'Erfolgreich exportiert',
      exportFailed: 'Export fehlgeschlagen',
    },
    export: {
      title: 'README Exportieren',
      description: 'Wählen Sie Ihr Exportformat',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  pt: {
    app: {
      title: 'Gerador de Perfil README',
      subtitle: 'Crie um README de perfil GitHub impressionante com visualização ao vivo',
    },
    actions: {
      copy: 'Copiar Markdown',
      download: 'Baixar',
      add: 'Adicionar',
      remove: 'Remover',
      edit: 'Editar',
      save: 'Salvar',
      cancel: 'Cancelar',
      preview: 'Visualizar',
      export: 'Exportar',
    },
    tabs: {
      edit: 'Editar',
      preview: 'Visualizar',
    },
    sections: {
      addSection: 'Adicionar Seção',
      startBuilding: 'Comece a Construir Seu README',
      startBuildingDesc: 'Adicione seções acima para criar seu perfil personalizado do GitHub',
      header: {
        name: 'Cabeçalho',
        description: 'Nome, título e banner',
        fields: {
          name: 'Nome',
          tagline: 'Slogan',
          bannerUrl: 'URL do Banner',
          githubUsername: 'Nome de Usuário GitHub',
          showGithubProfile: 'Mostrar Perfil GitHub',
        },
      },
      about: {
        name: 'Sobre Mim',
        description: 'Bio e introdução',
        fields: {
          content: 'Sobre Mim',
          githubUsername: 'Nome de Usuário GitHub',
          showGithubProfile: 'Mostrar Perfil GitHub',
        },
      },
      skills: {
        name: 'Habilidades',
        description: 'Stack tecnológico',
        fields: {
          addSkill: 'Adicionar Habilidade',
          skillName: 'Nome da Habilidade',
        },
      },
      stats: {
        name: 'Estatísticas GitHub',
        description: 'Estatísticas e sequências',
        fields: {
          username: 'Nome de Usuário GitHub',
          showStats: 'Mostrar Estatísticas',
          showStreak: 'Mostrar Sequência',
          showLanguages: 'Mostrar Principais Linguagens',
          theme: 'Tema',
        },
      },
      badges: {
        name: 'Emblemas',
        description: 'Emblemas tecnológicos',
        fields: {
          addBadge: 'Adicionar Emblema',
          type: 'Tipo',
          label: 'Rótulo',
          message: 'Mensagem',
          color: 'Cor',
          logo: 'Logo',
          logoColor: 'Cor do Logo',
          style: 'Estilo',
          labelColor: 'Cor do Rótulo',
          link: 'Link',
        },
      },
      socials: {
        name: 'Links Sociais',
        description: 'Contato e perfis',
        fields: {
          addLink: 'Adicionar Link',
          platform: 'Plataforma',
          url: 'URL',
          username: 'Nome de Usuário',
        },
      },
      techstack: {
        name: 'Stack Tecnológico (Código)',
        description: 'Visão técnica estilo código',
        fields: {
          variableName: 'Nome da Variável',
          code: 'Linguagens de Código',
          tools: 'Ferramentas e Frameworks',
          architecture: 'Arquitetura',
          customFields: 'Campos Personalizados',
          addCustomField: 'Adicionar Campo Personalizado',
          key: 'Chave',
          value: 'Valor',
        },
      },
      streaming: {
        name: 'Vídeo e Streaming',
        description: 'Canais YouTube/Twitch',
        fields: {
          addChannel: 'Adicionar Canal',
          addVideo: 'Adicionar Vídeo',
          platform: 'Plataforma',
          url: 'URL',
          username: 'Nome de Usuário',
          videoTitle: 'Título do Vídeo',
        },
      },
      trophy: {
        name: 'Troféus GitHub',
        description: 'Vitrine de conquistas',
        fields: {
          username: 'Nome de Usuário GitHub',
          theme: 'Tema',
          columns: 'Colunas',
          noFrame: 'Sem Moldura',
          noBackground: 'Sem Fundo',
          marginWidth: 'Largura da Margem',
          marginHeight: 'Altura da Margem',
        },
      },
      contributions: {
        name: 'Gráfico de Contribuições',
        description: 'Mapa de calor de atividade',
        fields: {
          username: 'Nome de Usuário GitHub',
          theme: 'Tema',
          hideTitle: 'Ocultar Título',
        },
      },
      certifications: {
        name: 'Certificações',
        description: 'Conquistas e certificados',
        fields: {
          addCertification: 'Adicionar Certificação',
          template: 'Modelo',
          name: 'Nome',
          issuer: 'Emissor',
          date: 'Data',
          credentialId: 'ID da Credencial',
          credentialUrl: 'URL da Credencial',
          icon: 'Ícone',
          color: 'Cor',
          description: 'Descrição',
        },
      },
    },
    notifications: {
      sectionAdded: 'Seção adicionada',
      sectionRemoved: 'Seção removida',
      copied: 'Copiado para a área de transferência!',
      copyFailed: 'Falha ao copiar',
      downloaded: 'README.md baixado',
      downloadFailed: 'Falha ao baixar arquivo',
      exported: 'Exportado com sucesso',
      exportFailed: 'Falha ao exportar',
    },
    export: {
      title: 'Exportar README',
      description: 'Escolha seu formato de exportação',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  it: {
    app: {
      title: 'Generatore di Profilo README',
      subtitle: 'Crea uno splendido README del profilo GitHub con anteprima dal vivo',
    },
    actions: {
      copy: 'Copia Markdown',
      download: 'Scarica',
      add: 'Aggiungi',
      remove: 'Rimuovi',
      edit: 'Modifica',
      save: 'Salva',
      cancel: 'Annulla',
      preview: 'Anteprima',
      export: 'Esporta',
    },
    tabs: {
      edit: 'Modifica',
      preview: 'Anteprima',
    },
    sections: {
      addSection: 'Aggiungi Sezione',
      startBuilding: 'Inizia a Costruire il Tuo README',
      startBuildingDesc: 'Aggiungi sezioni sopra per creare il tuo profilo GitHub personalizzato',
      header: {
        name: 'Intestazione',
        description: 'Nome, titolo e banner',
        fields: {
          name: 'Nome',
          tagline: 'Slogan',
          bannerUrl: 'URL del Banner',
          githubUsername: 'Nome Utente GitHub',
          showGithubProfile: 'Mostra Profilo GitHub',
        },
      },
      about: {
        name: 'Su di Me',
        description: 'Biografia e introduzione',
        fields: {
          content: 'Su di Me',
          githubUsername: 'Nome Utente GitHub',
          showGithubProfile: 'Mostra Profilo GitHub',
        },
      },
      skills: {
        name: 'Competenze',
        description: 'Stack tecnologico',
        fields: {
          addSkill: 'Aggiungi Competenza',
          skillName: 'Nome Competenza',
        },
      },
      stats: {
        name: 'Statistiche GitHub',
        description: 'Statistiche e serie',
        fields: {
          username: 'Nome Utente GitHub',
          showStats: 'Mostra Statistiche',
          showStreak: 'Mostra Serie',
          showLanguages: 'Mostra Linguaggi Principali',
          theme: 'Tema',
        },
      },
      badges: {
        name: 'Badge',
        description: 'Badge tecnologici',
        fields: {
          addBadge: 'Aggiungi Badge',
          type: 'Tipo',
          label: 'Etichetta',
          message: 'Messaggio',
          color: 'Colore',
          logo: 'Logo',
          logoColor: 'Colore Logo',
          style: 'Stile',
          labelColor: 'Colore Etichetta',
          link: 'Link',
        },
      },
      socials: {
        name: 'Link Social',
        description: 'Contatto e profili',
        fields: {
          addLink: 'Aggiungi Link',
          platform: 'Piattaforma',
          url: 'URL',
          username: 'Nome Utente',
        },
      },
      techstack: {
        name: 'Stack Tecnologico (Codice)',
        description: 'Panoramica tecnica stile codice',
        fields: {
          variableName: 'Nome Variabile',
          code: 'Linguaggi di Codice',
          tools: 'Strumenti e Framework',
          architecture: 'Architettura',
          customFields: 'Campi Personalizzati',
          addCustomField: 'Aggiungi Campo Personalizzato',
          key: 'Chiave',
          value: 'Valore',
        },
      },
      streaming: {
        name: 'Video e Streaming',
        description: 'Canali YouTube/Twitch',
        fields: {
          addChannel: 'Aggiungi Canale',
          addVideo: 'Aggiungi Video',
          platform: 'Piattaforma',
          url: 'URL',
          username: 'Nome Utente',
          videoTitle: 'Titolo Video',
        },
      },
      trophy: {
        name: 'Trofei GitHub',
        description: 'Vetrina di risultati',
        fields: {
          username: 'Nome Utente GitHub',
          theme: 'Tema',
          columns: 'Colonne',
          noFrame: 'Senza Cornice',
          noBackground: 'Senza Sfondo',
          marginWidth: 'Larghezza Margine',
          marginHeight: 'Altezza Margine',
        },
      },
      contributions: {
        name: 'Grafico Contributi',
        description: 'Mappa termica attività',
        fields: {
          username: 'Nome Utente GitHub',
          theme: 'Tema',
          hideTitle: 'Nascondi Titolo',
        },
      },
      certifications: {
        name: 'Certificazioni',
        description: 'Risultati e certificati',
        fields: {
          addCertification: 'Aggiungi Certificazione',
          template: 'Modello',
          name: 'Nome',
          issuer: 'Emittente',
          date: 'Data',
          credentialId: 'ID Credenziale',
          credentialUrl: 'URL Credenziale',
          icon: 'Icona',
          color: 'Colore',
          description: 'Descrizione',
        },
      },
    },
    notifications: {
      sectionAdded: 'Sezione aggiunta',
      sectionRemoved: 'Sezione rimossa',
      copied: 'Copiato negli appunti!',
      copyFailed: 'Copia fallita',
      downloaded: 'README.md scaricato',
      downloadFailed: 'Download fallito',
      exported: 'Esportato con successo',
      exportFailed: 'Esportazione fallita',
    },
    export: {
      title: 'Esporta README',
      description: 'Scegli il tuo formato di esportazione',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  ja: {
    app: {
      title: 'READMEプロフィールジェネレーター',
      subtitle: 'ライブプレビュー付きで素晴らしいGitHubプロフィールREADMEを作成',
    },
    actions: {
      copy: 'Markdownをコピー',
      download: 'ダウンロード',
      add: '追加',
      remove: '削除',
      edit: '編集',
      save: '保存',
      cancel: 'キャンセル',
      preview: 'プレビュー',
      export: 'エクスポート',
    },
    tabs: {
      edit: '編集',
      preview: 'プレビュー',
    },
    sections: {
      addSection: 'セクションを追加',
      startBuilding: 'READMEの構築を開始',
      startBuildingDesc: '上にセクションを追加して、パーソナライズされたGitHubプロフィールを作成します',
      header: {
        name: 'ヘッダー',
        description: '名前、タイトル、バナー',
        fields: {
          name: '名前',
          tagline: 'キャッチフレーズ',
          bannerUrl: 'バナーURL',
          githubUsername: 'GitHubユーザー名',
          showGithubProfile: 'GitHubプロフィールを表示',
        },
      },
      about: {
        name: '自己紹介',
        description: '経歴と紹介',
        fields: {
          content: '自己紹介',
          githubUsername: 'GitHubユーザー名',
          showGithubProfile: 'GitHubプロフィールを表示',
        },
      },
      skills: {
        name: 'スキル',
        description: '技術スタック',
        fields: {
          addSkill: 'スキルを追加',
          skillName: 'スキル名',
        },
      },
      stats: {
        name: 'GitHub統計',
        description: '統計とストリーク',
        fields: {
          username: 'GitHubユーザー名',
          showStats: '統計を表示',
          showStreak: 'ストリークを表示',
          showLanguages: 'トップ言語を表示',
          theme: 'テーマ',
        },
      },
      badges: {
        name: 'バッジ',
        description: '技術バッジ',
        fields: {
          addBadge: 'バッジを追加',
          type: 'タイプ',
          label: 'ラベル',
          message: 'メッセージ',
          color: '色',
          logo: 'ロゴ',
          logoColor: 'ロゴの色',
          style: 'スタイル',
          labelColor: 'ラベルの色',
          link: 'リンク',
        },
      },
      socials: {
        name: 'ソーシャルリンク',
        description: '連絡先とプロフィール',
        fields: {
          addLink: 'リンクを追加',
          platform: 'プラットフォーム',
          url: 'URL',
          username: 'ユーザー名',
        },
      },
      techstack: {
        name: '技術スタック（コード）',
        description: 'コードスタイルの技術概要',
        fields: {
          variableName: '変数名',
          code: 'コード言語',
          tools: 'ツールとフレームワーク',
          architecture: 'アーキテクチャ',
          customFields: 'カスタムフィールド',
          addCustomField: 'カスタムフィールドを追加',
          key: 'キー',
          value: '値',
        },
      },
      streaming: {
        name: 'ビデオとストリーミング',
        description: 'YouTube/Twitchチャンネル',
        fields: {
          addChannel: 'チャンネルを追加',
          addVideo: 'ビデオを追加',
          platform: 'プラットフォーム',
          url: 'URL',
          username: 'ユーザー名',
          videoTitle: 'ビデオタイトル',
        },
      },
      trophy: {
        name: 'GitHubトロフィー',
        description: '実績のショーケース',
        fields: {
          username: 'GitHubユーザー名',
          theme: 'テーマ',
          columns: '列',
          noFrame: 'フレームなし',
          noBackground: '背景なし',
          marginWidth: 'マージン幅',
          marginHeight: 'マージン高さ',
        },
      },
      contributions: {
        name: 'コントリビューショングラフ',
        description: 'アクティビティヒートマップ',
        fields: {
          username: 'GitHubユーザー名',
          theme: 'テーマ',
          hideTitle: 'タイトルを非表示',
        },
      },
      certifications: {
        name: '資格',
        description: '実績と証明書',
        fields: {
          addCertification: '資格を追加',
          template: 'テンプレート',
          name: '名前',
          issuer: '発行者',
          date: '日付',
          credentialId: '資格ID',
          credentialUrl: '資格URL',
          icon: 'アイコン',
          color: '色',
          description: '説明',
        },
      },
    },
    notifications: {
      sectionAdded: 'セクションが追加されました',
      sectionRemoved: 'セクションが削除されました',
      copied: 'クリップボードにコピーされました！',
      copyFailed: 'コピーに失敗しました',
      downloaded: 'README.mdがダウンロードされました',
      downloadFailed: 'ファイルのダウンロードに失敗しました',
      exported: 'エクスポートに成功しました',
      exportFailed: 'エクスポートに失敗しました',
    },
    export: {
      title: 'READMEをエクスポート',
      description: 'エクスポート形式を選択',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
  zh: {
    app: {
      title: 'README 个人资料生成器',
      subtitle: '创建一个令人惊叹的GitHub个人资料README，带实时预览',
    },
    actions: {
      copy: '复制 Markdown',
      download: '下载',
      add: '添加',
      remove: '删除',
      edit: '编辑',
      save: '保存',
      cancel: '取消',
      preview: '预览',
      export: '导出',
    },
    tabs: {
      edit: '编辑',
      preview: '预览',
    },
    sections: {
      addSection: '添加部分',
      startBuilding: '开始构建您的 README',
      startBuildingDesc: '在上方添加部分以创建您的个性化GitHub个人资料',
      header: {
        name: '标题',
        description: '姓名、标题和横幅',
        fields: {
          name: '姓名',
          tagline: '标语',
          bannerUrl: '横幅网址',
          githubUsername: 'GitHub用户名',
          showGithubProfile: '显示GitHub个人资料',
        },
      },
      about: {
        name: '关于我',
        description: '简介和介绍',
        fields: {
          content: '关于我',
          githubUsername: 'GitHub用户名',
          showGithubProfile: '显示GitHub个人资料',
        },
      },
      skills: {
        name: '技能',
        description: '技术栈',
        fields: {
          addSkill: '添加技能',
          skillName: '技能名称',
        },
      },
      stats: {
        name: 'GitHub 统计',
        description: '统计数据和连续记录',
        fields: {
          username: 'GitHub用户名',
          showStats: '显示统计',
          showStreak: '显示连续记录',
          showLanguages: '显示主要语言',
          theme: '主题',
        },
      },
      badges: {
        name: '徽章',
        description: '技术徽章',
        fields: {
          addBadge: '添加徽章',
          type: '类型',
          label: '标签',
          message: '消息',
          color: '颜色',
          logo: '标志',
          logoColor: '标志颜色',
          style: '样式',
          labelColor: '标签颜色',
          link: '链接',
        },
      },
      socials: {
        name: '社交链接',
        description: '联系方式和个人资料',
        fields: {
          addLink: '添加链接',
          platform: '平台',
          url: '网址',
          username: '用户名',
        },
      },
      techstack: {
        name: '技术栈（代码）',
        description: '代码风格的技术概述',
        fields: {
          variableName: '变量名',
          code: '代码语言',
          tools: '工具和框架',
          architecture: '架构',
          customFields: '自定义字段',
          addCustomField: '添加自定义字段',
          key: '键',
          value: '值',
        },
      },
      streaming: {
        name: '视频和直播',
        description: 'YouTube/Twitch 频道',
        fields: {
          addChannel: '添加频道',
          addVideo: '添加视频',
          platform: '平台',
          url: '网址',
          username: '用户名',
          videoTitle: '视频标题',
        },
      },
      trophy: {
        name: 'GitHub 奖杯',
        description: '成就展示',
        fields: {
          username: 'GitHub用户名',
          theme: '主题',
          columns: '列',
          noFrame: '无边框',
          noBackground: '无背景',
          marginWidth: '边距宽度',
          marginHeight: '边距高度',
        },
      },
      contributions: {
        name: '贡献图',
        description: '活动热图',
        fields: {
          username: 'GitHub用户名',
          theme: '主题',
          hideTitle: '隐藏标题',
        },
      },
      certifications: {
        name: '认证',
        description: '成就和证书',
        fields: {
          addCertification: '添加认证',
          template: '模板',
          name: '名称',
          issuer: '颁发者',
          date: '日期',
          credentialId: '凭证ID',
          credentialUrl: '凭证网址',
          icon: '图标',
          color: '颜色',
          description: '描述',
        },
      },
    },
    notifications: {
      sectionAdded: '已添加部分',
      sectionRemoved: '已删除部分',
      copied: '已复制到剪贴板！',
      copyFailed: '复制失败',
      downloaded: '已下载 README.md',
      downloadFailed: '文件下载失败',
      exported: '导出成功',
      exportFailed: '导出失败',
    },
    export: {
      title: '导出 README',
      description: '选择您的导出格式',
      formats: {
        markdown: 'Markdown (.md)',
        html: 'HTML (.html)',
        pdf: 'PDF (.pdf)',
      },
    },
  },
};

export function useTranslation(language: Language): Translations {
  return translations[language] || translations.en;
}
