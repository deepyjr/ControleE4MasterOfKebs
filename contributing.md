# Découpage

Le projet est découpé en 3 grosses parties :
 * Views : C'est là que les vues se répartissent, elles incluent toutes les éléments du Layout.jsx ( cad : panier et la navigation )
 * Components : Vous y trouverez les différents composants uytilisés dans l'application.
 * Store : Vous trouverez dans ce fichier les différents Contexts.

Pour le CSS, chaque composant a un fichier css qui lui est attribué pour ce qui est des vues il faut le placer de le fichier Process.css

Il faut conserver cette architecture pour permetter un accès facile aux différents éléments. Veuillez continuer de grouper les fichiers selon cette organisation.

# Ajouter une page 

Pour ajouter une page il ne faut pas oublier de rajouter son lien dans le Layout.jsx afin que le router soit opérationnel.

# Ajouter un context

Si vous désirez ajouter un context il ne faut pas oublier de placer l'import de celui-ci au niveau du fichier index.js à la racine du projet.

# Ajouter une image

Pour ajouter une image, il faut la placer au sein du dossier public